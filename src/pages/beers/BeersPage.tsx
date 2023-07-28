import React from 'react';
import './BeersPage.css';
import Background from '../../beer.png';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../../shared/components/icon/Icon';
import SwitchButton from '../../shared/components/switch/Switch';
import { beersRequested } from '../../store/beers/beers.actions';
import { abvSelector, gridStateSelector } from '../../store/beers/beers.selectors';
import BrewdogGrid from './components/grid/BrewdogGrid';
import { HashLink as Link } from 'react-router-hash-link';

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: '10%',
};

function BeersPage() {
  const dispatch = useDispatch();
  const hasAbv = useSelector(abvSelector);
  const gridState = useSelector(gridStateSelector);
  const loadBeersList = (skip: number, abv?: number) => {
    dispatch(beersRequested(skip, gridState.pageSize, abv));
  };

  return (
    <div style={sectionStyle}>
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='jumbotron-title'>Brewdog&apos;s beers</h1>
          <div className='go-to-btn'>
            <a href='/members'>
              <IconButton
                icon='bi bi-person-check go-to-icon'
                title='go to members page'
              ></IconButton>
            </a>
            <Link to='#catalogue'>
              <IconButton
                icon='bi bi-arrow-down-circle go-to-icon'
                title='go to catalogue'
              ></IconButton>
            </Link>
          </div>
          <div className='jumbotron-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat mi ac nisl
              tempus consequat. Aliquam consectetur eu nisl non ullamcorper. Nulla malesuada
              vestibulum eros nec iaculis. Sed sit amet sapien turpis. Fusce sed justo lectus. Nam
              laoreet accumsan vehicula. Suspendisse vehicula risus ut hendrerit porta. Phasellus
              arcu sapien, consectetur commodo augue vel, semper scelerisque eros. Praesent vitae
              dignissim lacus. Nam ac euismod mi. Curabitur sed enim pulvinar, semper mauris eu,
              laoreet lorem. Duis convallis diam eget tellus tristique imperdiet. Phasellus ac
              laoreet elit. Donec imperdiet lobortis gravida. Praesent venenatis imperdiet
              condimentum. Fusce enim sem, elementum et lacinia id, finibus sed sem.
            </p>
            <p>
              In urna leo, rhoncus vel eleifend non, vehicula in lectus. Sed tincidunt diam urna, at
              vehicula elit condimentum nec. Nullam id ante pretium, feugiat massa vel, feugiat
              tortor. Praesent quam augue, commodo eget consectetur egestas, sodales nec ipsum.
              Donec fermentum condimentum augue sed rutrum. Nulla lacinia justo ac velit dictum
              vestibulum interdum id mi. Vestibulum convallis condimentum sem, in elementum sapien
              pulvinar in. Nunc sapien leo, semper mattis posuere a, fermentum non nisl. Suspendisse
              facilisis leo et hendrerit blandit. Nam molestie pulvinar urna, ac viverra eros
              efficitur eu. Nunc quis viverra nisi. Pellentesque maximus dignissim nisl, quis
              sagittis massa porta eget. Cras at elit eget ipsum sollicitudin laoreet id at est.
              Aliquam erat volutpat.
            </p>
            <p>
              Pellentesque malesuada purus ac odio dictum aliquam ut quis ligula. Integer mauris
              nisl, sodales vel condimentum et, luctus nec lacus. Vivamus at molestie libero. Cras
              quis leo feugiat, lacinia tellus ut, suscipit ex. Pellentesque a urna efficitur,
              egestas enim et, euismod lacus. Quisque arcu ipsum, dictum pretium velit a, faucibus
              fringilla tortor. Fusce tincidunt sem nec diam dignissim pharetra. Sed a consequat
              nunc, at mattis arcu.
            </p>
          </div>
        </div>
      </div>
      <div className='container beers-page'>
        <div className='page-title'>
          <h1 id='catalogue'>Catalogue</h1>
          <div className='abv-switch'>
            <SwitchButton
              label='Only strong beers ?'
              title='Filter all beer that have an abv < 8'
              value={hasAbv}
              onChange={(value) => {
                loadBeersList(gridState.skip, value ? 8 : undefined);
              }}
            ></SwitchButton>
          </div>
        </div>
        <BrewdogGrid></BrewdogGrid>
      </div>
    </div>
  );
}

export default BeersPage;
