import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import sheep from './sheep.png'
import pets from './pets.png'
import rose1 from './rose1.png'

export default function Main() {
 
  // const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      
      <Divider />
      <div>
        <h1> The Little Sheep </h1>
        <p> Aromas of ripe peaches and citrus notes with flavors of lemon, lime and a hint of green apple. Well-balanced acidity and a lingering hint of nectarine frames the finish.
      The refreshing quality of the wine is achieved through process of carefully selecting the best grapes and gently pressing them and then placed in controlled low-temperature fermentation stainless steel tanks with maximum protection from oxidation.</p>

        <p>This light bodied refreshing wine will pair wonderfully with a wide variety of salads, asparagus, artichokes, avocados, apples, crab cakes, hummus, feta, goat cheese, mango, tomatoes, turkey, green vegetables, basil, to name just a few.</p>
        <img src={sheep} alt='sheep'/>
      </div>

      <div>
        <h1> Vinum Cellars PETS</h1>
        <p> A cross offspring of the grapes Syrah and a nearly extinct rare grape Peloursin allows me to enjoy Petit Sirah in all its glory in this bottle of wine. With impressive color and entry, the wine presents itself with intense aromas of blueberry and huckleberry fruit notes. The wine is refined with a rich French Oak barrel profile adding a complex silky platform of spice and vanilla flavors.</p> <p>The wine is well structured and full bodied with elegant tannins allowing the flavors and character of the variety to shine through. The finish is rich with dark chocolate, blackberry and creamy vanilla. The color of this massive Petite Sirah is deep plum to inky purple. The entry of this dense Petite is both tannic and bold while maintaining a juicy, overripe profile displaying ample acidity to balance the tannins and fruit concentration making it flexibly food friendly. The finish is so supple and smooth that you will miss it when it is gone</p>

        <img src={pets} alt="pets"/>
      </div>

      <div>
        <h1> Bouvet Rosé Brut </h1>
        <p> Bouvet Rosé Brut exhibits a brilliant, delicate salmon-pink color punctuated by fine, pinpoint bubbles which suggest the wines fresh, raspberry and cassis fragrance. On the palate it is very dry and crisp, with plump, succulent red fruit flavors offset by subtle earthy notes and a lovely generosity on the clean, persistent finish. Never a doubt when I pick up this rosé bubbly, the Bouvet Brut Rosé Excellence comes through with attractive red fruits and savory earth. Pair it with mussels in a spicy broth.</p>

        
        <img src={rose1} alt="sheep"/>
      </div>

      


    </Grid>
  );
}

