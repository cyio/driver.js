/* eslint-disable */
import Driver from '../../src';

document.addEventListener('DOMContentLoaded', function () {
  const tourSteps = [
    {
      element: document.getElementById('driver-demo-head'),
      popover: {
        className: 'scoped-driver-popover',
        title: '首页 1/3',
        description: '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本',
        closeBtnText: '跳过',
        prevBtnText: '',
        nextBtnText: '下一步',
      },
    }, {
      // element: '#logo_img',
      element: '.logo_img1',
      popover: {
        className: 'scoped-driver-popover',
        title: '首页 2/3',
        description: '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本',
        closeBtnText: '跳过',
        prevBtnText: '上一步',
        nextBtnText: '下一步',
      },
    }, {
      element: '#name_driver',
      popover: {
        className: 'scoped-driver-popover',
        title: '首页 3/3',
        description: '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本',
        closeBtnText: '',
        prevBtnText: '上一步',
        doneBtnText: '我知道了',
      }
    }
  ];

  const animatedTourDriver = new Driver({
    animate: true,
    opacity: 0.8,
    padding: 5,
    showButtons: true,
  });

  const boringTourDriver = new Driver({
    animate: false,
    opacity: 0.8,
    padding: 5,
    showButtons: true,
    className: 'boring-scope',
  });

  boringTourDriver.defineSteps(tourSteps);
  animatedTourDriver.defineSteps(tourSteps);

  document.querySelector('#animated-tour')
    .addEventListener('click', () => {
      if (boringTourDriver.isActivated) {
        boringTourDriver.reset(true);
      }

      animatedTourDriver.start();
    });

  document.querySelector('#boring-tour')
    .addEventListener('click', () => {
      if (animatedTourDriver.isActivated) {
        animatedTourDriver.reset(true);
      }

      boringTourDriver.start();
    });


  try {
    document.querySelectorAll('pre code')
      .forEach((element) => {
        hljs.highlightBlock(element);
      });
  } catch (e) {
    // Silently ignore the highlight errors
  }


/////////////////////////////////////////////
// First example – highlighting without popover
/////////////////////////////////////////////
  const singleDriverNoPopover = new Driver();
  document.querySelector('#run-single-element-no-popover')
    .addEventListener('click', (e) => {
      e.preventDefault();
      singleDriverNoPopover.highlight('#single-element-no-popover');
    });

/////////////////////////////////////////////
// Form focus examples
/////////////////////////////////////////////
  const focusDriver = new Driver({ padding: 0 });
  const inputIds = ['creation-input', 'creation-input-2', 'creation-input-3', 'creation-input-4'];
  inputIds.forEach(inputId => {
    // Highlight the section on focus
    document.getElementById(inputId)
      .addEventListener('focus', () => {
        focusDriver.highlight(`#${inputId}`);
      });
  });

/////////////////////////////////////////////
// Highlighting single element with popover
/////////////////////////////////////////////
  const singleDriverWithPopover = new Driver();
  document.querySelector('#run-single-element-with-popover')
    .addEventListener('click', (e) => {
      e.preventDefault();
      singleDriverWithPopover.highlight({
        element: '#single-element-with-popover',
        showButtons: false,
        popover: {
          title: 'Did you know?',
          description: 'You can add HTML in title or description also!',
          position: 'top'
        }
      });
    });

/////////////////////////////////////////////////////
// Highlighting single element with popover position
/////////////////////////////////////////////////////
  const singleDriverWithPopoverPosition = new Driver();
  document.querySelector('#run-single-element-with-popover-position')
    .addEventListener('click', (e) => {
      e.preventDefault();

      singleDriverWithPopoverPosition.highlight({
        element: '#single-element-with-popover-position',
        showButtons: false,
        popover: {
          title: 'Did you know?',
          description: 'You can add HTML in title or description also!',
          position: 'top'
        }
      });
    });

/////////////////////////////////////////////////////
// Highlighting single element with popover position
/////////////////////////////////////////////////////
  const positionBtnsDriver = new Driver({
    padding: 0,
  });

  document.querySelector('#position-btns')
    .addEventListener('click', (e) => {
      e.preventDefault();

      let id = e.target.id;
      let alignment = e.target.dataset.alignment;

      if (!alignment) return;

      positionBtnsDriver.highlight({
        element: `#${id}`,
        showButtons: false,
        popover: {
          title: 'Did you know?',
          description: 'You can add HTML in title or description also!',
          position: alignment
        }
      });
    })

/////////////////////////////////////////////////////
// Highlighting single element with popover position
/////////////////////////////////////////////////////
  const htmlDriver = new Driver();

  document.querySelector('#run-single-element-with-popover-html')
    .addEventListener('click', (e) => {
      e.preventDefault();

      htmlDriver.highlight({
        element: '#single-element-with-popover-html',
        showButtons: false,
        popover: {
          title: '<em>Tags</em> in title or <u>body</u>',
          description: 'Body can also have <strong>html tags</strong>!',
          position: 'top'
        }
      });
    });

/////////////////////////////////////////////////////
// Without Overlay Example
/////////////////////////////////////////////////////
  const withoutOverlay = new Driver({
    opacity: 0,
    padding: 0
  });

  document.querySelector('#run-element-without-popover')
    .addEventListener('click', (e) => {
      e.preventDefault();

      withoutOverlay.highlight({
        element: '#run-element-without-popover',
        popover: {
          title: 'Title for the Popover',
          description: 'Description for it',
          position: 'top', // can be `top`, `left`, `right`, `bottom`
        }
      });
    });

/////////////////////////////////////////////
// Single no close demo
/////////////////////////////////////////////
  const singleNoClose = new Driver({
    allowClose: false,
    position: 'top'
  });

  singleNoClose.defineSteps([{
    element: '#single-element-no-close',
    popover: {
      title: 'Uh-huh!',
      description: 'You cannot close by clicking outside'
    }
  }, {
    element: '#third-element-introduction',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'top'
    }
  }]);

  document.querySelector('#run-single-element-no-close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      singleNoClose.start();
    });

/////////////////////////////////////////////////////
// Highlighting single element with popover position
/////////////////////////////////////////////////////
  const featureIntroductionDriver = new Driver();
  featureIntroductionDriver.defineSteps([
    {
      element: '#first-element-introduction',
      popover: {
        className: 'first-step-popover-class',
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top'
      }
    },
    {
      element: '#second-para-feature-introductions',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'bottom'
      }
    },
    {
      element: '#third-para-feature-introductions',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top'
      }
    },
    {
      element: '#run-multi-element-popovers',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top'
      }
    },
    {
      element: '#third-element-introduction',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top'
      }
    },
  ]);

  document.querySelector('#run-multi-element-popovers')
    .addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      featureIntroductionDriver.start();
    });

  const newURL = location.href.split('?')[0];
  if (newURL !== location.href) {
    window.location = newURL;
    window.location.href = newURL;
  }
});
