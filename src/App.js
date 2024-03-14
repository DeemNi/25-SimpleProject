import './App.css';
import Accordian from './components/accordion';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagState from './components/feature-flag/content';
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
import TikTakToe from './components/tic-tak-toe';
import UseFetchHookTest from './components/useFetch/test';
import UseOnClickOutsideTest from './components/useOnClickOutside/test';

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
      {/* <SearchAutocomplete /> */}

      {/* Tic Tak Toe Component */}
      {/* <TikTakToe /> */}

      {/* Feature Flag Switcher */}
      {/* <FeatureFlagState>
        <FeatureFlags />
      </FeatureFlagState> */}

      {/* useFatch - custom hook */}
      {/* <UseFetchHookTest /> */}

      {/* useOnClickOutside - custom hook */}
      <UseOnClickOutsideTest /> 
    </div>
  );
}

export default App;
