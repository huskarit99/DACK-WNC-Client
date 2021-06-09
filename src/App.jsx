import { useEffect } from 'react';
import './App.css';
import Header from './parts/containers/Header/Header';
import MenuBar from './parts/containers/MenuBar/MenuBar';
import { appendScript } from './utils/appendScripts';

const App = () => {
  useEffect(()=>{
    appendScript('js/vendor/modernizr-2.8.3.min.js');
    appendScript('js/vendor/jquery-1.12.4.min.js');
    //appendScript('js/bootstrap.min.js');
    appendScript('js/wow.min.js');
    appendScript('js/jquery-price-slider.js');
    appendScript('js/jquery.meanmenu.js');
    appendScript('js/owl.carousel.min.js');
    appendScript('js/jquery.sticky.js');
    appendScript('js/jquery.scrollUp.min.js');
    appendScript('js/counterup/jquery.counterup.min.js');
    appendScript('js/counterup/waypoints.min.js');
    appendScript('js/counterup/counterup-active.js');
    //appendScript('js/scrollbar/jquery.mCustomScrollbar.concat.min.js');
    //appendScript('js/scrollbar/mCustomScrollbar-active.js');
    appendScript('js/metisMenu/metisMenu.min.js');
    appendScript('js/metisMenu/metisMenu-active.js');
    appendScript('js/morrisjs/raphael-min.js');
    appendScript('js/morrisjs/morris.js');
    appendScript('js/morrisjs/morris-active.js');
    appendScript('js/sparkline/jquery.sparkline.min.js');
    appendScript('js/sparkline/jquery.charts-sparkline.js');
    appendScript('js/sparkline/sparkline-active.js');
    appendScript('js/calendar/moment.min.js');
    appendScript('js/calendar/fullcalendar.min.js');
    appendScript('js/calendar/fullcalendar-active.js');
    appendScript('js/jquery.maskedinput.min.js');
    appendScript('js/masking-active.js');
    appendScript('js/datepicker/jquery-ui.min.js');
    appendScript('js/datepicker/datepicker-active.js');
    appendScript('js/form-validation/jquery.form.min.js');
    appendScript('js/form-validation/jquery.validate.min.js');
    appendScript('js/form-validation/form-active.js');
    appendScript('js/dropzone/dropzone.js');
    appendScript('js/icheck/icheck.min.js');
    appendScript('js/icheck/icheck-active.js');
    appendScript('js/plugins.js');
    appendScript('js/main.js');

  }, []);
  return (
    <div>
      <MenuBar />
      <div class="all-content-wrapper">
        <Header/>
      </div>

    </div>

  );
}

export default App;
