import Nav_A from '../Nav_bar_A/Nav_A'
import './Home_A.css'
import chessvidoe1 from '../../assets/chessvideo1.mp4'

const Home_A = () => {
  return (
    <div>
        <Nav_A/>
        <video src={chessvidoe1} autoPlay loop muted/>
    <header>
      <h1 className='he1'>Chess Portal Admin HomePage</h1>
    </header>
    <main>
      <section>
        <h2>Welcome, Admin!</h2>
        <p>This is your dashboard. From here, you can manage the chess portal.</p>
      </section>
      <section>
        <h3>Quick Stats</h3>
        <p>Number of Active Games: ...</p>
        <p>Number of Registered Users: ...</p>
        </section>
      <section>
      <section>
          <h3>Academy</h3>
          <p>Explore the latest chess courses and tutorials to improve your game.</p>
          <ul>
            <li>Beginner Chess Tactics</li>
            <li>Mastering Chess Openings</li>
            <li>Endgame Strategies</li>
          </ul>
        </section>
        <h3>Recent Activities</h3>
        <p>Latest games, user registrations, etc.</p>
        </section>
    </main>
    <footer>
      <p>Admin Portal © 2024 Chess Inc.</p>
    </footer>
  </div>
  )
}
export default Home_A