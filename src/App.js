import { Card, Badge, Button } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

// Provide your first name here.
// Leave it empty (e.g. const firstName = '';)
// and the app will fall back to "Hello, there!".
const firstName = 'Lamine';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Badge bg="light" text="dark" className="app-badge">
          ✦ React Checkpoint · Product Card
        </Badge>
        <h1 className="app-title">
          Meet the <span className="app-title-highlight">Aurora Pro</span>
        </h1>
        <p className="app-subtitle">
          A tiny product page built with reusable React components &amp; react-bootstrap.
        </p>
      </header>

      {/* Card containing all four product components */}
      <Card className="product-card">
        <div className="card-media">
          <Image />
          <Badge pill bg="warning" text="dark" className="card-badge">
            New ✨
          </Badge>
        </div>
        <Card.Body className="card-body">
          <Name />
          <div className="card-meta">
            <Price />
            <span className="card-rating" aria-label="Rated 4.9 out of 5">
              ★★★★★ <span className="card-rating-count">(4.9)</span>
            </span>
          </div>
          <Description />
          <div className="card-actions">
            <Button className="buy-btn" size="lg">
              Add to cart
            </Button>
            <Button className="wishlist-btn" size="lg" variant="outline-light">
              ♡ Wishlist
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Personal greeting displayed below the card */}
      <div className="greeting">
        {firstName && (
          <img
            className="greeting-avatar"
            src="/images/avatar.svg"
            alt={`${firstName} avatar`}
          />
        )}
        <p className="greeting-text">
          Hello, {firstName ? firstName : 'there'}!{' '}
          <span className="greeting-wave" role="img" aria-label="waving hand">
            👋
          </span>
        </p>
      </div>

      <footer className="app-footer">
        Built with React &amp; react-bootstrap — GoMyCode checkpoint
      </footer>
    </div>
  );
}

export default App;
