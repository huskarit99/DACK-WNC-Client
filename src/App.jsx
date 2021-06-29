import { useEffect } from 'react';
import './App.css';
import Header from './parts/containers/Header/Header';
import MenuBar from './parts/containers/MenuBar/MenuBar';
import Logo from './parts/containers/Logo/Logo';
import BreadCome from './parts/containers/BreadCome/BreadCome';
import { appendScript } from './utils/appendScripts';
import Home from './pages/Home/Home';

const App = () => {
  useEffect(() => {
    appendScript('js/jquery-price-slider.js');
    appendScript('js/counterup/jquery.counterup.min.js');
    appendScript('js/counterup/waypoints.min.js');
    appendScript('js/counterup/counterup-active.js');
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
    appendScript('js/main.js');
  }, []);
  return (
    <div>
      <MenuBar />
      <div class="all-content-wrapper">
        <Logo />
        <Header />
        <BreadCome />
        {/* Switch, Route */}
        <Home/>
      </div>
    </div>
  );
}

export default App;
