import './App.css';
import Accordian from './components/accordion';
import TabTest from './components/custom-tabs/tab-test';
import GitChecker from './components/github-profile-checker/gitChecker';
import ImageSlider from './components/image-slider';
import LoadMoreButton from './components/load-more-button';
import ModalTest from './components/modal-popup/modal-test';
import TreeView from './components/navigation-menu';
import menus from './components/navigation-menu/data';
import QrGenerator from './components/qr-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutocomplete from './components/search-autocomplete/search';
import StarRating from './components/star-rating';
import ThemeSwitch from './components/theme-switcher';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color Genetator */}
      {/* <RandomColor /> */}

      {/* Star Rating Component*/}
      {/* <StarRating numberOfStars={10}/> */}

      {/* Image Slider Component*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'} /> */}

      {/* Load More Data Using Button */}
      {/* <LoadMoreButton /> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr Code Genetator */}
      {/* <QrGenerator /> */}

      {/* Theme Switcher Component */}
      {/* <ThemeSwitch /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Checker */}
      {/* <GitChecker /> */}

      {/* Search Autocomplete Component */}
      <SearchAutocomplete />

    </div>
  );
}

export default App;
