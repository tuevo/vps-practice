$(document).ready(() => {
  initWidget();
});

const initWidget = () => {
  loadCSS('/');
  loadWidgetIframe();
}

const loadCSS = (baseLocation) => {
  $('<link />')
    .attr({
      rel: 'stylesheet',
      href: baseLocation + 'styles/widget.style.css'
    })
    .appendTo($('head')[0]);

  $('<link />')
    .attr({
      rel: 'stylesheet',
      href: baseLocation + 'libs/animate.min.css'
    })
    .appendTo($('head')[0]);
}

const loadWidgetIframe = () => {

  let container = $('<div></div>')
    .attr({
      id: 'ccclt-widget-container'
    })
    .appendTo($(document.body));

  let ifrmDiv = $('<div></div>')
    .attr({
      id: 'ccclt-widget-div-iframe',
      class: 'animated bounceIn'
    })
    .appendTo(container);

  $('<iframe></iframe>')
    .attr({
      id: 'ccclt-widget-iframe',
      scrolling: 'no',
      frameborder: 0
    })
    .appendTo(ifrmDiv);

  $('<div></div>')
    .attr({
      id: 'ccclt-widget-btn-close'
    })
    .appendTo(ifrmDiv)
    .on('click', () => {
      setWidgetDisplay(false);
    });

  // setWidgetDisplay(false);

  const data1 = {
    name: 'Mẫu 1',
    sampleTemplate: template1,
    sampleImage: 'https://f.trazk.com/userfiles/uploads/202001/3ec7d8b7bdbaa2232393060e4729772d.png',
    category: 'BANNER_SALES',
    code: 'BANNER_SALES_mau1',    // CATEGORY_name
    components: [
      {
        name: 'Hình nền',
        type: 'BACKGROUND_IMAGE',
        url: 'https://f.trazk.com/userfiles/uploads/202001/bd6065551c626bb7c2c7cfdfb81983ab.png'
      },
      {
        name: 'Tiêu đề 1',
        type: 'TEXT',
        text: 'TƯNG BỪNG KHUYẾN MÃI'
      },
      {
        name: 'Tiêu đề 2',
        type: 'TEXT',
        text: 'SALE'
      },
      {
        name: 'Tiêu đề 3',
        type: 'TEXT',
        text: '25% OFF'
      },
      {
        name: 'Tiêu đề 4',
        type: 'TEXT',
        text: 'Xay mịn đá - Bức phá vị ngon'
      },
      {
        name: 'Tiêu đề 5',
        type: 'TEXT',
        text: 'Giá chỉ'
      },
      {
        name: 'Giá khuyến mãi',
        type: 'TEXT',
        text: '690.000đ'
      },
      {
        name: 'Nút bấm',
        type: 'BUTTON',
        text: 'Mua ngay',
        url: 'https://x2.com.vn'
      }
    ],
    size: {
      width: '50em',
      height: '25em'
    }
  };

  const data3 = {
    name: 'Mẫu 2',
    sampleTemplate: template3,
    sampleImage: 'https://f.trazk.com/userfiles/uploads/202002/8f76eedcfc63da35d2fbab00abe57e76.png',
    category: 'BANNER_SALES',
    code: 'BANNER_SALES_mau2',    // CATEGORY_name
    components: [],
    size: {
      width: '23.125em',
      height: '37.5em'
    }
  }

  const data4 = {
    name: 'Mẫu 3',
    sampleTemplate: template4,
    sampleImage: 'https://f.trazk.com/userfiles/uploads/202002/c8f8887952aea97ad18260a949d6248d.png',
    category: 'BANNER_SALES',
    code: 'BANNER_SALES_mau3',    // CATEGORY_name
    components: [],
    size: {
      width: '28.125em',
      height: '37.75em'
    }
  }

  const data2 = {
    name: 'Mẫu 1',
    sampleTemplate: template2,
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


  const data5 = {
    name: 'Mẫu 2',
    sampleTemplate: template5,
    sampleImage: 'https://f.trazk.com/userfiles/uploads/201912/2bf2277f5e52bbf4603ae89ed2d08cda.png',
    category: 'CONTACT_FORM',
    code: 'CONTACT_FORM_mau2',    // CATEGORY_name
    components: [],
    size: {
      width: '37.5em',
      height: '23.75em'
    }
  }

  setIframeData(data2);
}

const setWidgetDisplay = (isShown) => {
  let container = $('#ccclt-widget-container');

  if (isShown) {
    container.css({ display: 'flex' });
  }
  else {
    container.css({ display: 'none' });
  }
}

const makeUpIframeData = (data) => {
  let { sampleTemplate, category, code, components, size } = data;

  let textIndexes = [];

  for (const i in components) {

    switch (components[i].type) {
      case 'TEXT':
        textIndexes.push(i);
        break;

      case 'BUTTON':
        const re1 = new RegExp(`<!-- BUTTON_URL -->`, 'g');
        const re2 = new RegExp(`<!-- BUTTON_TEXT -->`, 'g');
        sampleTemplate = sampleTemplate
          .replace(re1, components[i].url)
          .replace(re2, components[i].text);
        break;

      case 'BACKGROUND_IMAGE':
        const re = new RegExp(`<!-- BACKGROUND_IMAGE -->`, 'g');
        sampleTemplate = sampleTemplate.replace(re, components[i].url);
        break;

      default:
        break;
    }

  }

  textIndexes.forEach((index, count) => {
    const re = new RegExp(`<!-- TEXT_${count} -->`, 'g');
    sampleTemplate = sampleTemplate.replace(re, components[index].text);
  });

  setWidgetIframeSize(size);
  $(window).on('resize', () => {
    setWidgetIframeSize(size);
  });

  return {
    sampleTemplate,
    category,
    code,
    components,
    size
  };
}

const setWidgetIframeSize = (size) => {
  const windowSize = window.innerWidth;
  let realSize;

  if (windowSize < 600)
    realSize = size.mobile;
  else realSize = size.pc;

  $('#ccclt-widget-div-iframe').css(realSize);
}

const setIframeData = (data) => {
  const newData = makeUpIframeData(data);
  let ifrmDoc = document.getElementById('ccclt-widget-iframe').contentWindow.document;
  ifrmDoc.open();
  ifrmDoc.write(newData.sampleTemplate);
  ifrmDoc.close();
}

const template1 = `
<html class="wf-robotoslab-n4-active wf-quicksand-n4-active wf-active"><head>
<title>Widget Content</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async="">
</script><script src="https://trazk.vncdn.vn/master/js/jquery.js"></script>
<script src="https://trazk.vncdn.vn/master/js/rebuildData.js"></script>
<script src="https://trazk.vncdn.vn/master/js/widgetsConfig.js"></script>
<link rel="stylesheet" type="text/css" href="https://trazk.vncdn.vn/master/css/style.css">
<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/003/018/css/style.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand%7CRoboto+Slab%7CRoboto+Slab%7CQuicksand%7CQuicksand%7CQuicksand%7CQuicksand" media="all">
</head>
<body>
<div class="container widgetPosition_center" id="container">
<div class="salebanner-component-3 content_header_background_color-2 widgetBg" style="width: 100%; background-color: rgb(255, 0, 0); background-image: url(&quot;<!-- BACKGROUND_IMAGE -->&quot;); background-size: cover;">
  <div class="main-sale-banner">
  <h4 class="content_header_color widgetTitle" id="field-content_description" data-edit="text" style="font-family: Quicksand; font-size: 18px; color: rgba(0, 0, 0, 0.95);"><div style="text-align: center;"><!-- TEXT_0 --></div></h4>
  <h2 class=" content_contact_name widgetMaintitle" id="field-content_name" data-edit="text" style="font-family: &quot;Roboto Slab&quot;; font-size: 75px; color: rgb(5, 5, 5);"><div><!-- TEXT_1 --></div></h2>
  <div class="border-content-sale">
    <p class="content_sale widgetSale" style="font-family: &quot;Roboto Slab&quot;; font-size: 31px; color: rgb(9, 9, 9);"><!-- TEXT_2 --></p>
  </div>
  <h3 class="widgetTitlemini" data-edit="text" id="field-content_coupon" style="font-family: Quicksand; font-size: 15px; color: rgb(0, 0, 0);"><!-- TEXT_3 --></h3>
  <div class="sale-banner-area-button content_link widgetGroup" style="background-color: rgb(254, 254, 254); background-size: cover;">
    <div class="sale-price">
      <div class="title-price widgetTitlePrice" style="font-family: Quicksand; font-size: 12px; color: rgb(13, 0, 0);"><div><b><!-- TEXT_4 --></b></div></div>
      <div class="price widgetPrice" style="font-family: Quicksand; font-size: 17px; color: rgb(250, 68, 68);"><div><b><!-- TEXT_5 --></b></div></div>
    </div>
    <a class="sale-banner-button content_button_color content_button_background_color content_link widgetButton btnLogClick" href="<!-- BUTTON_URL -->" id="link1" type="submit" target="_top" style="color: rgb(255, 255, 255); background-color: rgb(237, 131, 37); font-family: Quicksand;"><!-- BUTTON_TEXT --></a>
    
  </div>
  </div>

  <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
  <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

  </div>
</div></body></html>
`;

const template2 = `
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
`;

const template3 = `
<html><head>
<title>Widget Content</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<script src="https://themes.trazk.com/master/js/jquery.js"></script>
<script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
<script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/002/005/css/style.css">
</head>
<body>
<div class="container widgetPosition_center" id="container">
<div class="banner-2-container widgetBg" id="field-content_fake_background" style="background-color: rgb(255, 73, 73); background-image: url(&quot;https://f.trazk.com/userfiles/uploads/202002/d1edc10e5851ef425add59bad98ac1d0.png&quot;); background-position: center center;">
  <div class="button-banner-2">
    <a class="content-banner-href widgetButton" target="_top" href="https://fff.com.vn" style="color: rgba(255, 255, 255, 0.95); background-color: rgb(172, 104, 66);">Xem ngay</a>
    
  </div>
  
  <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
  <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

</div>
</div>


</body></html>
`;

const template4 = `
<html class="wf-quicksand-n4-active wf-chonburi-n4-active wf-itim-n4-active wf-active"><head>
		<title>Widget Content</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://trazk.vncdn.vn/master/js/jquery.js"></script>
		<script src="https://trazk.vncdn.vn/master/js/rebuildData.js"></script>
		<script src="https://trazk.vncdn.vn/master/js/widgetsConfig.js"></script>
		<link rel="stylesheet" type="text/css" href="https://trazk.vncdn.vn/master/css/style.css">
		<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/003/038/css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chonburi%7CItim%7CQuicksand" media="all">
</head>
<body>
	<div class="container widgetPosition_center" id="container">
	<div class="salebanner-component-38 content_header_background_color-2 widgetBg">
		<div class="main-salebanner widgetImage">
			<div class="group">
				<div class="content-salebanner-1 widgetTitle" style="font-family: Chonburi; font-size: 23px; color: rgb(6, 6, 6);">&nbsp; &nbsp; <i>&nbsp; 40% off</i></div>
				
				<div class="content-salebanner-3 widgetContent" style="font-family: Itim; font-size: 25px; color: rgba(11, 33, 155, 0.8);">Happy woman day</div>
				<div class="content-salebanner-4 widgetContent-1" style="font-family: Quicksand; font-size: 16px; color: rgb(0, 0, 0);"><div>Nhận ngay voucher 500k&nbsp;</div><div>cho phái nữ đến mua hàng</div></div>
				<button class="button-send font-button-send widgetButton" href="https://www.fff.com.vn/" target="_top" style="color: rgb(249, 247, 247); background-color: rgb(255, 0, 136);">Xem ngay</button>
				
				
			</div>
		</div>
    
    <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
    <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

		</div>
</div></body></html>
`;

const template5 = `
<html class="wf-quicksand-n4-active wf-dancingscript-n4-active wf-active"><head>
		<title>Widget Content</title>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://themes.trazk.com/master/js/jquery.js"></script>
		<script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
		<script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
		<!-- <script src="https://themes.trazk.com/master/js/validate.js"></script> -->
		<script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
		<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
		<link rel="stylesheet" type="text/css" href="https://themes.trazk.com/002/009/css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script%7CQuicksand" media="all">
</head>
<body>
	<div class="container widgetPosition_center" id="container">
		<div class="banner-3-container widgetBg" style="background-image: url(&quot;https://f.trazk.com/userfiles/uploads/201912/596f9f4c183cafdf3c1498928c394ca8.jpeg&quot;);">
			<div class="banner-images-3 ">
					<img class="widgetProduct" src="https://f.trazk.com/userfiles/uploads/201912/596f9f4c183cafdf3c1498928c394ca8.jpeg" alt="" style="display: none;">
				</div>
		<form class="banner-text-3 formStep1" novalidate="novalidate">
			<h1 class="banner-3-title widgetTitle" id="field-content_title" style="font-family: &quot;Dancing Script&quot;; font-size: 39px; color: rgb(255, 86, 138); background-color: transparent;"><div style="text-align: center;"><b>Một nửa yêu thương</b></div></h1>
			<p class="banner-3-des widgetDes" id="field-content_description" style="font-family: Quicksand; font-size: 15px; color: rgba(76, 55, 55, 0.95);"><div><b>Mừng 8/3 tặng ngay mã giảm giá 70% cho đơn hàng trên 1.000.000VND</b></div></p>
			
				<div class="banner-input-user">
					<div class="icon">
						<i class="fas fa-user"></i>
					</div>
					<input type="text" name="name" class="banner-user widgetInputFullname inputName displayBlock" placeholder="Tên của bạn">
				</div>
				<div class="banner-input-email">
					<div class="icon">
						<i class="fas fa-envelope"></i>
					</div>
					<input type="phone" name="phone" class="banner-email widgetInputEmail inputPhone displayBlock" placeholder="Email của bạn">
				</div>
				<button type="submit" target="_blank" class="banner-3-button widgetSendButton className" style="color: rgb(255, 254, 254); background-color: rgb(255, 89, 146);">Đăng ký</button>
			</form>
			
        <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
        <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>
		
				<div class="formStep2 hiddenAll">
					<div class="success-check animated bounce"> 
						<img class="images-check" src="https://themes.trazk.com/003/013/images/check_mark.png" alt="">
						</div>
						<p class="thanks">Cảm ơn bạn đã để lại thông tin</p>
				</div>
      
        <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
        <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

		</div>
	</div>

</body></html>
`;