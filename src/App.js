import './App.css';
import Accordian from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreButton from './components/load-more-button';
import TreeView from './components/navigation-menu';
import menus from './components/navigation-menu/data';
import QrGenerator from './components/qr-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

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
      <QrGenerator />

    </div>
  );
}

export default App;
