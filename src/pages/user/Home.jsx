import { Fragment } from 'react';

// import Button from '@components/ui/Button';
import CategoryList from '@components/ui/CategoryList.jsx';
import ReusableSection from '@components/ui/ReusableSection.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '@/services/AuthService';
import ProductByCategory from '@/components/ui/ProductByCategory';

import fullBanner from '@assets/images/banner/full-banner.png';
import moveRight from '@assets/icons/icon-move-right.svg';

function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories(); // Goi API lay danh sach categories
        setCategory(data);
      } catch (error) {
        console.error('Loi khi lay danh muc:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Fragment>
      <section>
        <div className="home">
          <div className="home__banner">
            <img className="img-banner" src={fullBanner} alt="Banner" />
            <div className="banner__content">
              <h5 className="discount">Weekend Discount</h5>
              <h2 className="title">Get the best quality products at the lowest prices</h2>
              <p className="describe">We have prepared special discounts for you on organic breakfast products</p>

              <Link to={'/shop'} className="btn btn-shop">
                <p>Shop Now</p>
                <img src={moveRight} alt="Move Right" />
              </Link>
            </div>
          </div>
          <ReusableSection title="Browse by Categories" linkTo="shop">
            <CategoryList />
          </ReusableSection>

          {category.slice(0, 2).map((category) => (
            <ReusableSection title={category.name} key={category._id} linkTo={`shop?category=${category.slug}`}>
              <ProductByCategory idCategory={category._id} />
            </ReusableSection>
          ))}

          <div className="home__cashBack">
            <h1 className="cashBack-title">Get 10% Cashback! Min Order of 300.000</h1>
            <p className="cashBack-subtitle">
              Use code: <span className="code">GROCERY1920</span>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
