export default [
  {
    name: 'Mẫu 1',
    sampleTemplate: `
    <html class="wf-playfairdisplay-n4-active wf-quicksand-n4-active wf-active"><head>
    <title>Widget Content</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://themes.trazk.com/master/js/jquery.js"></script>
    <script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
    <!-- <script src="https://themes.trazk.com/master/js/validate.js"></script> -->
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
    <script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
    <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
    <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/003/013/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display%7CQuicksand" media="all">
    </head>
    <body>
    <div class="container widgetPosition_center" id="container">
    <div class="salebanner-component-7 content_header_background_color-2 widgetBg" style="background-color: rgb(255, 0, 0); background-image: url(&quot;<!-- BACKGROUND_IMAGE -->&quot;); background-position: center top;">
    <form class="main-salebanner formStep1" novalidate="novalidate">
      <div class="cick-to-call-header-img widgetAvata" id="field-content_avatar" src="https://image.flaticon.com/icons/png/128/205/205702.png" style="display: none;">
        <img class="widgetAvata" src="https://image.flaticon.com/icons/png/128/205/205702.png" style="display: none;">
      </div>
      <div class="content-salebanner-1 font-tilte-1 widgetTitle" style="font-family: &quot;Playfair Display&quot;; font-size: 38px; color: rgb(255, 244, 237);">Happy&nbsp; Woman Day</div>
      <div class="content-salebanner-2 font-tilte-2 widgetTitlemini" style="font-family: Quicksand; font-size: 16px; color: rgb(250, 250, 250);">&nbsp;Nhận ngay mã giảm 50%&nbsp; &amp; miễn phí giao&nbsp; hàng</div>
      <div class="form-email">
        <input type="text" name="email" class="banner-email inputEmail widgetTextbox" placeholder="Nhập email của bạn" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">
        <button type="submit" class="button-send font-button-send widgetButton widgetBuble" style="color: rgb(255, 255, 255); background-color: rgb(247, 63, 122);"><i class="fas fa-gift" id="bubble-icon" style="color: rgb(255, 255, 255);"></i></button>
      </div>
    </form>
    <div class="formStep2 hiddenAll">
      <img class="img-check" src="https://themes.trazk.com/003/013/images/check_mark.png" alt="">
      <p class="thanks">Cảm ơn bạn đã để lại thông tin</p>
    </div>
    </div>

      <style>
        .widgetPowerBy::before { background: url("https://www.svgrepo.com/show/200115/lightning-thunder.svg") }
        .widgetPowerBy::after { content: 'by x2.com.vn' }
      </style>
      <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

    </div>
    </body></html>
    `,
    sampleImage: 'https://f.trazk.com/userfiles/uploads/201912/b711f62a611edbecd70fdd6b78b1f3a4.png',
    category: 'CONTACT_FORM',
    code: 'CONTACT_FORM_mau1',
    components: [
      {
        name: 'Hình nền',
        type: 'BACKGROUND_IMAGE',
        url: 'https://f.trazk.com/userfiles/uploads/201912/61d422107b1e54d755d9d63b8079c2c3.png'
      }
    ],
    size: {
      pc: {
        width: '30em',
        height: '21.875em'
      },
      mobile: {
        width: '22.5em',
        height: '21.875em'
      }
    },
  }
]