import { Link } from 'react-router-dom';

import moveRightDark from '@assets/icons/icon-move-right-dark.svg';

function ReusableSection({ title, key = '', linkTo, children }) {
  return (
    <div className="home__section">
      <div className="section__title">
        <h1 className="title" key={key}>
          {title}
        </h1>
        <Link to={`/${linkTo}`} className="btn btn-viewAll">
          <p>View All</p>
          <img src={moveRightDark} alt="Move Right" />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default ReusableSection;
