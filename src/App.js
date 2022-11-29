import "./App.css";
import { useCallback, useEffect, useState, React } from "react";
import storeData from "./assets/store-data.json";
import { StoreGrid } from "./components/StoreGrid";
import { CartItem } from "./components/CartItem";

// import { Button, Container } from '@mui/material';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, FormControl, FormGroup, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
storeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [currCart, setCurrCart] = useState({});
  const [price, setPrice] = useState(0);
  const [currDisplay, setCurrDisplay] = useState(storeData);
  const [sortVal, setSortVal] = useState("popular");

  // custome MUI theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#d1a480',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
    typography: {
      fontFamily: "Georgia",
    }
  });

  // filter color values
  const [colors, setColors] = useState({
    black: true,
    blue: true,
    floral: true,
    green: true,
    lavender: true,
    white: true
  });

  const { black, blue, floral, green, lavender, white } = colors;

  const handleColorChange = async (event) => {
    setColors({ ...colors, [event.target.name]: event.target.checked });
    console.log(colors);
  }

  // filter style values
  const [styles, setStyles] = useState({
    blouse: true,
    dress: true,
    jacket: true,
    tank: true,
    tunic: true,
  });

  const { blouse, dress, jacket, tank, tunic } = styles;

  const handleStyleChange = async (event) => {
    setStyles({ ...styles, [event.target.name]: event.target.checked });
    console.log(styles);
  };

  // reset filters
  function handleFilterReset() {
    setColors({
      black: true,
      blue: true,
      floral: true,
      green: true,
      lavender: true,
      white: true
    })

    setStyles({
      blouse: true,
      dress: true,
      jacket: true,
      tank: true,
      tunic: true,
    })
  }

  // sort
  const sortDisplay = async (value) => {
    console.log(value);
    if (value === "price") {
      const sortedArray = currDisplay.sort((a, b) => {
        console.log(a);
        return a.price - b.price;
      })
      console.log(sortedArray);
      setCurrDisplay(sortedArray);
    } else {
      const sortedArray = currDisplay.sort((a, b) => {
        return a.popular - b.popular;
      })
      console.log(sortedArray);
      setCurrDisplay(sortedArray);
    }
    console.log(currDisplay);
  }


  useEffect(() => 
    {
        console.log(sortVal);
      if (sortVal === "price") {
        const sortedArray = currDisplay.sort((a, b) => {
          console.log(a);
          return a.price - b.price;
        })
        console.log(sortedArray);
        setCurrDisplay(sortedArray);
      } else {
        const sortedArray = currDisplay.sort((a, b) => {
          return a.popular - b.popular;
        })
        console.log(sortedArray);
        setCurrDisplay(sortedArray);
      }
      console.log(currDisplay);
    }, 
    [setSortVal, sortVal]
  );

  // filter 
  const colorFilter = (item) => {
    return colors[item.color];
  }

  const styleFilter = (item) => {
    return styles[item.style];
  }

  useEffect(() => 
  {
      const filteredData = storeData.filter(colorFilter).filter(styleFilter);
      setCurrDisplay(filteredData);
      console.log(currDisplay);
  },
  [colors, styles]
);

  // add to cart
  function addToCart(item) {
    if (currCart[item.name] == null) {
      currCart[item.name] = 1;
    }
    else {
      currCart[item.name] = currCart[item.name] + 1;
    }
    setPrice(price + item.price)
    console.log(currCart);
  }

  // remove from cart
  function removeFromCart(item) {
    if (currCart[item.name] > 0) {
      const itemCount = currCart[item.name] - 1;
      currCart[item.name] = itemCount;
      setPrice(Math.abs(price - item.price));
    }
    console.log(item.name);
    console.log(currCart);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="root">
      <div className="Header" styles="justify-items: center"> 
        <h1>Fashion Haus</h1>
      </div>
      <div className="PageGrid">
        <div className="SideBar">
          <div>
            <h3>Sort by</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={(e)=> {setSortVal(e.target.value); sortDisplay(e.target.value); console.log(e.target.value);}}
                defaultValue={"popular"}
                value={sortVal}
              >
                <FormControlLabel value="price" control={<Radio />} label="Price" />
                <FormControlLabel value="popular" control={<Radio />} label="Ratings" />
              </RadioGroup>
            </FormControl>
          </div>
          <br></br>
          <div>
          <h3>Filter by color</h3>
            <FormControl component="fieldset">
              <FormLabel component="legend">Pick colors</FormLabel>
              <FormGroup>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={black}
                      onChange={handleColorChange}
                      name="black"
                    />
                  }
                  label="black"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={blue}
                      onChange={handleColorChange}
                      name="blue"
                    />
                  }
                  label="blue"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={floral}
                      onChange={handleColorChange}
                      name="floral"
                    />
                  }
                  label="floral"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green}
                      onChange={handleColorChange}
                      name="green"
                    />
                  }
                  label="green"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lavender}
                      onChange={handleColorChange}
                      name="lavender"
                    />
                  }
                  label="lavender"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={white}
                      onChange={handleColorChange}
                      name="white"
                    />
                  }
                  label="white"
                />
              </FormGroup>
            </FormControl>
          </div>
          <br></br>
          <div>
          <h3>Filter by style</h3>
            <FormControl component="fieldset">
              <FormLabel component="legend">Pick styles</FormLabel>
              <FormGroup>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={blouse}
                      onChange={handleStyleChange}
                      name="blouse"
                    />
                  }
                  label="blouse"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dress}
                      onChange={handleStyleChange}
                      name="dress"
                    />
                  }
                  label="dress"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jacket}
                      onChange={handleStyleChange}
                      name="jacket"
                    />
                  }
                  label="jacket"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tank}
                      onChange={handleStyleChange}
                      name="tank"
                    />
                  }
                  label="tank"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tunic}
                      onChange={handleStyleChange}
                      name="tunic"
                    />
                  }
                  label="tunic"
                />
              </FormGroup>
            </FormControl>
          </div>
          <br></br>
          <Button variant="contained" onClick={handleFilterReset}>Reset filters</Button>
          <br></br>
          <br></br>
          <div class="Cart">
            <h3>Cart</h3>
            {
              Object.keys(currCart).map(function(key, index) {
                if (currCart[key] > 0) {
                return <CartItem
                  item={key}
                  count={currCart[key]}
                ></CartItem>;}
              })
            }
            
            <br></br>
            <h4>Price: {(price).toFixed(2)}</h4>
            <Button variant="contained">Checkout</Button>
          </div>
        </div>
        <StoreGrid display={currDisplay} cart={currCart} add={addToCart} remove={removeFromCart}></StoreGrid>
      </div>
    </div>
    </ThemeProvider>
  );
}


export default App;
