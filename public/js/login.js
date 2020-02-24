$(document).ready(() => {
  $('#frm-login').on('submit', e => {
    e.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    $.post('/login', { username, password }, res => {
      let alert = $('#login-alert');

      if (res.status !== 200) {
        alert.text(res.errors[0]);
        alert.addClass('status--error');
      }
      else {
        alert.text(`${res.messages[0]} Your token: ${res.data.token}`);
        alert.addClass('status--success');
      }
    })
  })
});