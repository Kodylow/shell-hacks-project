import './index.scss';
import ProductList from '../../components/ProductList';
import Modal from '../../components/Modal';
import { useState } from 'react';

function Home({ headerUnderJumbo }) {
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [products, setProducts] = useState([
    {
      index: 0,
      artist: 'Beyonce',
      image: '/images/beyonce.jpeg',
      date: 'SEP 26',
      time: '7:30pm',
      venue: 'Culture Room',
      quantity: 0,
      location: 'Fort Lauderdale, FL'
    },
    {
      index: 1,
      artist: 'Parcels',
      image: '/images/parcels.jpeg',
      date: 'SEP 26',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      quantity: 0,
      location: 'Hollywood, FL'
    },
    {
      index: 2,
      artist: 'Daft Punk',
      image: '/images/daft_punk.jpeg',
      date: 'SEP 26',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      quantity: 0,
      location: 'Miami, FL'
    },
    {
      index: 3,
      artist: 'Kendrick Lamar',
      image: '/images/kendrick.jpeg',
      date: 'SEP 27',
      time: '8:00pm',
      venue: 'BB&T Center',
      quantity: 0,
      location: 'Sunrise, FL'
    },
    {
      index: 4,
      artist: 'Bruno Mars',
      image: '/images/bruno-mars.jpeg',
      date: 'SEP 27',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      quantity: 0,
      location: 'Miami, FL'
    },
    {
      index: 5,
      artist: 'Billie Eillish',
      image: '/images/billie_eillish.jpeg',
      date: 'SEP 27',
      time: '7:30pm',
      venue: 'Culture Room',
      quantity: 0,
      location: 'Fort Lauderdale, FL'
    },
    {
      index: 6,
      artist: 'Lorde',
      image: '/images/lorde.jpeg',
      date: 'SEP 28',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      quantity: 0,
      location: 'Hollywood, FL'
    },
    {
      index: 7,
      artist: 'Kanye West',
      image: '/images/kanye.jpeg',
      date: 'SEP 28',
      time: '8:00pm',
      venue: 'BB&T Center',
      quantity: 0,
      location: 'Sunrise, FL'
    },
    {
      index: 8,
      artist: 'Taylor Swift',
      image: '/images/taylor_swift.jpeg',
      date: 'SEP 28',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      quantity: 0,
      location: 'Miami, FL'
    },
    {
      index: 9,
      artist: 'Future',
      image: '/images/future.jpeg',
      date: 'SEP 29',
      time: '7:30pm',
      venue: 'Culture Room',
      quantity: 0,
      location: 'Fort Lauderdale, FL'
    },
    {
      index: 10,
      artist: 'Ed Sheeran',
      image: '/images/ed_sheeran.jpeg',
      date: 'SEP 29',
      time: '8:00pm',
      venue: 'BB&T Center',
      quantity: 0,
      location: 'Sunrise, FL'
    },
    {
      index: 11,
      artist: 'Guns & Roses',
      image: '/images/gunsnroses.jpeg',
      date: 'SEP 29',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      quantity: 0,
      location: 'Hollywood, FL'
    },
  ]);
  const [updates, setUpdates] = useState(0);
  const setProductQuantity = (index, n) => {
    const newProducts = products;
    if (typeof newProducts[index] === 'undefined') return;

    if (n >= 0) {
      newProducts[index].quantity = n || 0;
      setUpdates(updates + 1);
      setProducts(newProducts);
    }
  }

  const displayProduct = (product) => {
    setShowModal(true);
    setModalProduct(product);
  };

  return (
  <div className="Home">
    <header id="header" className={(() => (headerUnderJumbo) ? 'under_jumbo' : '')()}>
      <div className="container container-wide">
        <h2 className="logo">CryptoTickets</h2>
      </div>
    </header>
    <div id="jumbo">
      <div className="container">
        <h2>Let's Make Crypto Happen</h2>
        <p>Shop amazing live concerts and discover the capabilities of cryptocurrencies by making your purchase with Bitcoin (BTC).</p>
      </div>
    </div>

    <main id="main">
      <div className="container">
        <h2>All Concerts Near Miami, FL</h2>
        <ProductList
          products={products}
          setProductQuantity={setProductQuantity}
          updates={updates}
          displayProduct={displayProduct} />
      </div>
    </main>

    <footer id="footer">
      <h2 className="logo">CryptoTickets</h2>
      <p>Sponsored by Shellhacks.</p>
    </footer>

    { showModal ? (
      <Modal
        product={modalProduct}
        setProductQuantity={setProductQuantity}
        setShowModal={setShowModal} />
    ) : null }
  </div>
  );
}

export default Home;
