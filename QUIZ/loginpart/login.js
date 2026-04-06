// ============================================================
//  FootballQuiz — login.js  (clean rewrite)
// ============================================================

// Clear any broken session data on arrival
(function cleanSession() {
  try {
    var raw = localStorage.getItem('qm_session');
    if (raw) {
      var s = JSON.parse(raw);
      if (!s || !s.name || !s.email) localStorage.removeItem('qm_session');
    }
  } catch (e) {
    localStorage.removeItem('qm_session');
  }
})();

// Wait for the full page to load before doing anything
window.addEventListener('DOMContentLoaded', function () {

  console.log('login.js loaded OK');

  // ---- ELEMENT REFS ----
  var tabs       = document.querySelectorAll('.tab');
  var loginForm  = document.getElementById('login-form');
  var signupForm = document.getElementById('signup-form');
  var loginBtn   = document.getElementById('login-btn');
  var signupBtn  = document.getElementById('signup-btn');

  if (!loginBtn)   console.error('login-btn not found in HTML');
  if (!signupBtn)  console.error('signup-btn not found in HTML');
  if (!loginForm)  console.error('login-form not found in HTML');
  if (!signupForm) console.error('signup-form not found in HTML');

  // ---- TAB SWITCHING ----
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      clearAll();
      if (tab.dataset.tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
      } else {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
      }
    });
  });

  // ---- SHOW / HIDE PASSWORD ----
  document.querySelectorAll('.toggle-pass').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = document.getElementById(btn.dataset.target);
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
    });
  });

  // ---- SIGN UP ----
  signupBtn.addEventListener('click', function() {
    clearAll();
    var name  = document.getElementById('signup-name').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var pass  = document.getElementById('signup-pass').value;
    var valid = true;

    if (!name) { setError('signup-name-err', 'Please enter your name.'); valid = false; }
    if (!email || !validEmail(email)) { setError('signup-email-err', 'Enter a valid email.'); valid = false; }
    if (!pass || pass.length < 6) { setError('signup-pass-err', 'Min. 6 characters.'); valid = false; }
    if (!valid) return;

    var users = loadUsers();
    if (users.find(function(u) { return u.email === email; })) {
      setError('signup-email-err', 'Email already registered.');
      return;
    }

    users.push({ name: name, email: email, password: pass });
    saveUsers(users);
    saveSession({ name: name, email: email });
    setMsg('signup-msg', 'success', 'Account created! Taking you to the quiz...');
    setTimeout(function() { window.location.href = 'quiz.html'; }, 1200);
  });

  // ---- LOGIN ----
  loginBtn.addEventListener('click', function() {
    clearAll();
    var email = document.getElementById('login-email').value.trim();
    var pass  = document.getElementById('login-pass').value;
    var valid = true;

    if (!email || !validEmail(email)) { setError('login-email-err', 'Enter a valid email.'); valid = false; }
    if (!pass) { setError('login-pass-err', 'Please enter your password.'); valid = false; }
    if (!valid) return;

    var users = loadUsers();
    var user  = users.find(function(u) { return u.email === email && u.password === pass; });

    if (!user) { setMsg('login-msg', 'error', 'Wrong email or password.'); return; }

    saveSession({ name: user.name, email: user.email });
    setMsg('login-msg', 'success', 'Welcome back, ' + user.name + '! Redirecting...');
    setTimeout(function() { window.location.href = 'quiz.html'; }, 1000);
  });

  // ---- ENTER KEY ----
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter') return;
    var active = document.querySelector('.tab.active');
    if (active && active.dataset.tab === 'login') loginBtn.click();
    else signupBtn.click();
  });

  // ---- AUTO-REDIRECT if already logged in ----
  try {
    var existing = localStorage.getItem('qm_session');
    if (existing) {
      var sess = JSON.parse(existing);
      if (sess && sess.name && sess.email) {
        window.location.href = 'quiz.html';
      }
    }
  } catch(e) { localStorage.removeItem('qm_session'); }

  // ============ HELPERS ============
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  function loadUsers() {
    try { return JSON.parse(localStorage.getItem('qm_users') || '[]'); }
    catch(e) { return []; }
  }

  function saveUsers(u) { localStorage.setItem('qm_users', JSON.stringify(u)); }

  function saveSession(u) {
    localStorage.setItem('qm_session', JSON.stringify({ name: u.name, email: u.email }));
  }

  function setError(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function setMsg(id, type, msg) {
    var el = document.getElementById(id);
    if (el) { el.className = 'form-message ' + type; el.textContent = msg; }
  }

  function clearAll() {
    document.querySelectorAll('.field-error').forEach(function(el) { el.textContent = ''; });
    document.querySelectorAll('.form-message').forEach(function(el) {
      el.className = 'form-message'; el.textContent = '';
    });
    document.querySelectorAll('input').forEach(function(el) { el.classList.remove('error'); });
  }

});
