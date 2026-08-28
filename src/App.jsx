import React, { useState } from "react";
import "./App.css";

function App() {
  const [slide, setSlide] = useState(0);
  const [letterOpen, setLetterOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const nextSlide = () => {
    setSlide((current) => Math.min(current + 1, 6));
  };

  const previousSlide = () => {
    setSlide((current) => Math.max(current - 1, 0));
  };

  const toggleSong = () => {
  const audio = document.getElementById("our-song");

  if (!audio) return;

  if (audio.paused) {
    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch((error) => {
        console.error("Audio error:", error);
      });
  } else {
    audio.pause();
    setPlaying(false);
  }
};

  const restart = () => {
    setSlide(0);
    setLetterOpen(false);
    setPlaying(false);

    const audio = document.getElementById("our-song");

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div className="website">

      <audio id="our-song" src="/song.mp3" loop />

      {/* Floating decorations */}
      <div className="floating-heart heart1">♥</div>
      <div className="floating-heart heart2">♥</div>
      <div className="floating-heart heart3">♥</div>

      <div className="butterfly butterfly1">🦋</div>
      <div className="butterfly butterfly2">🦋</div>

      {/* Slides */}
      <div
        className="slides-container"
        style={{
          transform: `translateY(-${slide * 100}vh)`,
        }}
      >

        {/* ================= SLIDE 1 ================= */}

        <section className="slide first-slide">
          <div className="slide-inner">

            <div className="small-heart">♥</div>

            <p className="eyebrow">
              A LITTLE SOMETHING FOR YOU
            </p>

            <h1>
              Hey Akanksha <span>♥</span>
            </h1>

            <h2>
               this is for my fav person
            </h2>

            <div className="shiny-heart">
              ♥
            </div>

            <p className="intro-text">
              I made this little corner of the internet just for you.
            </p>

            <p className="soft-text">
              Because apparently a normal text wasn't enough. ♡
            </p>

            <button
              className="cute-button"
              onClick={nextSlide}
            >
              There's something for you ↓
            </button>

          </div>
        </section>


        {/* ================= SLIDE 2 ================= */}

        <section className="slide">

          <div className="falling-stars">
            {Array.from({ length: 25 }, (_, index) => (
              <span key={index}>✦</span>
            ))}
          </div>

          <div className="slide-inner">

            <p className="eyebrow">
              JUST A FEW THINGS
            </p>

            <h1 className="section-title">
              A few reasons
              <br />
              <span>you are special</span>
            </h1>

            <div className="reasons-grid">

              <div className="reason-card">
                <div className="reason-icon">♡</div>

                <div>
                  <h3>Your smile</h3>
                  <p>
                    Somehow it makes everything around you
                    feel a little brighter haha cause you use your every teeth
                  </p>
                </div>
              </div>

              <div className="reason-card">
                <div className="reason-icon">✦</div>

                <div>
                  <h3>Your energy</h3>
                  <p>
                    You have this way of making ordinary
                    moments feel special ive found a perfect match ...muahh
                  </p>
                </div>
              </div>

              <div className="reason-card">
                <div className="reason-icon">♥</div>

                <div>
                  <h3>The little things</h3>
                  <p>
                    The tiny things you do probably mean
                    more than you realize your efforts are something that are the pillers of this relationship
                  </p>
                </div>
              </div>

              <div className="reason-card">
                <div className="reason-icon">✧</div>

                <div>
                  <h3>Just you</h3>
                  <p>
                    Honestly, I could keep writing and
                    still run out of reasons. Omg im so in love with you gurll
                  </p>
                </div>
              </div>

            </div>

            <button
              className="cute-button"
              onClick={nextSlide}
            >
              There's more ↓
            </button>

          </div>
        </section>


        {/* ================= SLIDE 3 ================= */}

        <section className="slide">

          <div className="slide-inner">

            <p className="eyebrow">
              THINGS I REMEMBER ABOUT YOU
            </p>

            <div className="favourite-card">

              <div className="red-heart-big">
                ♥
              </div>

              <h1>
                Little things about you
              </h1>

              <p className="quote">
                "because I actually remember the things you tell me"
              </p>


              {/* Favourite colour */}

              <div className="favourite-item">

                <div className="favourite-icon navy-icon">
                  💙
                </div>

                <div className="favourite-info">

                  <span>
                    YOUR FAVOURITE COLOUR
                  </span>

                  <h2>
                    Navy Blue
                  </h2>

                  <p>
                    "you told me this was your fav colour today itself lol
                  </p>

                </div>

              </div>


              {/* Favourite flowers */}

              <div className="favourite-item">

                <div className="favourite-icon flower-icons">
                  🌷🌻
                </div>

                <div className="favourite-info">

                  <span>
                    YOUR FAVOURITE FLOWERS
                  </span>

                  <h2>
                    Tulip & Sunflower
                  </h2>

                  <p>
                    obviously they had to be here too ...that sticker yaar so beautiful
                  </p>

                </div>

              </div>


              {/* Favourite animal */}

              <div className="favourite-item">

                <div className="favourite-icon">
                  🐧
                </div>

                <div className="favourite-info">

                  <span>
                    YOUR FAVOURITE ANIMAL
                  </span>

                  <h2>
                    Penguin also me??
                  </h2>

                  <p>
                    okay okay... i should be your favourite animal
                  </p>

                </div>

              </div>


              <div className="tiny-decoration">
                ✦ &nbsp; ♡ &nbsp; ✦ &nbsp; ♡ &nbsp; ✦
              </div>

            </div>

            <button
              className="cute-button"
              onClick={nextSlide}
            >
              Keep going ↓
            </button>

          </div>
        </section>


        {/* ================= SLIDE 4 ================= */}

        <section className="slide">

          <div className="slide-inner">

            <p className="eyebrow">
              LITTLE MEMORIES
            </p>

            <h1 className="section-title">
              Our little
              <br />
              <span>moments ♡</span>
            </h1>

            <div className="photo-grid">

          

              <div className="photo-card">
                <div className="photo-placeholder photo-two">
                  <img
                    src="/photo2.png"
                    alt="Our memory 2"
                  />
                </div>

                <div className="photo-caption">
                  <h3>One of my favourites</h3>
                  <p>
                    hotter than the sun itself
                  </p>
                </div>
              </div>

              <div className="photo-card">
                <div className="photo-placeholder photo-one">
                  <img
                    src="/photo1.png"
                    alt="Our memory 1"
                  />
                </div>

                <div className="photo-caption">
                  <h3>That smile</h3>
                  <p>
                    myyy cutieeeee
                  </p>
                </div>
              </div>



              <div className="photo-card">
                <div className="photo-placeholder photo-three">
                  <img
                    src="/photo3.jpeg"
                    alt="Our memory 3"
                  />
                </div>

                <div className="photo-caption">
                  <h3>A tiny memory</h3>
                  <p>
                    happiest days with you
                  </p>
                </div>
              </div>


              <div className="photo-card">
                <div className="photo-placeholder photo-four">
                  <img
                    src="/photo4.png"
                    alt="Our memory 4"
                  />
                </div>

                <div className="photo-caption">
                  <h3>Just us</h3>
                  <p>
                    our first trip ofc there are more to come 
                  </p>
                </div>
              </div>

            </div>

            <button
              className="cute-button"
              onClick={nextSlide}
            >
              One more thing ↓
            </button>

          </div>
        </section>


        {/* ================= SLIDE 5 ================= */}

        <section className="slide song-slide">

          <div className="slide-inner">

            <p className="eyebrow">
              PRESS PLAY ♡
            </p>

            <div className="music-card">

              <div className="music-disc">
                ♫
              </div>

              <p className="music-small">
                OUR LITTLE SONG
              </p>

              <h1>
                For when you
                <br />
                miss me ♡
              </h1>

              <p className="music-text">
                Put on the song, take a little breath,
                <br />
                and stay here for a moment or just call meeee!
              </p>

              <button
                className="play-button"
                onClick={toggleSong}
              >
                {playing
                  ? "❚❚  Pause our song"
                  : "▶  Play our song"}
              </button>

              <p className="music-hint">
                Add your song as
                <strong> public/song.mp3 </strong>
              </p>

            </div>

            <button
              className="cute-button"
              onClick={nextSlide}
            >
              I wrote something for you ↓
            </button>

          </div>
        </section>


        {/* ================= SLIDE 6 ================= */}

        <section className="slide letter-slide">

          <div className="slide-inner">

            <p className="eyebrow">
              THIS ONE IS FOR YOU
            </p>

            {!letterOpen ? (

              <div className="closed-letter">

                <div className="envelope">

                  <div className="envelope-top"></div>

                  <div className="envelope-heart">
                    ♥
                  </div>

                </div>

                <h1>
                  A letter for you
                </h1>

                <p>
                  There are some things that are
                  better written down.
                </p>

                <button
                  className="cute-button red-button"
                  onClick={() => setLetterOpen(true)}
                >
                  Click to open ♡
                </button>

              </div>

            ) : (

              <div className="letter-paper">

                <div className="letter-border">

                  <h1>
                    For you, always ♡
                  </h1>

                  <div className="letter-line"></div>

                  <p>
                    Hey Akanksha,
                  </p>

                  <p>
                    I don't really know how to put everything
                    into words, so I thought I'd make you something instead.
                  </p>

                  <p>
                    You are genuinely one of those people
                    who can make a normal day feel a little
                    more beautiful just by being there.
                  </p>

                  <p>
                    I hope you always remember how special
                    you are, even on the days when you don't
                    feel it yourself.
                  </p>

                  <p>
                    And just like the way you make a wish at 11:11,
                    I really wish that every wish you make in your
                    life comes true.
                  </p>

                  <p>
                    I hope you get everything you've ever wished for,
                    everything you've worked for, and everything that
                    makes you truly happy follows you.
            
                  </p>

                  <p className="letter-final">
                    I love you. ♥
                  </p>

                  <p className="signature">
                    — from someone who thinks you're
                    pretty damn special
                    - Nishchay
                  </p>

                </div>
              </div>

            )}

            {letterOpen && (
              <button
                className="cute-button"
                onClick={nextSlide}
              >
                There's one last thing ↓
              </button>
            )}

          </div>
        </section>


        {/* ================= SLIDE 7 ================= */}

        <section className="slide final-slide">

          <div className="slide-inner">

            <div className="final-heart">
              ♥
            </div>

            <p className="eyebrow">
              ONE LAST THING
            </p>

            <h1>
              Stay exactly
              <br />
              <span>the way you are.</span>
            </h1>

            <p className="final-message">
              Because that's the version of you
              <br />
              that makes this world a little nicer.
            </p>

            <div className="final-sparkles">
              ✦ &nbsp; ♡ &nbsp; ✧ &nbsp; ♥ &nbsp; ✦
            </div>

            <p className="end-note">
              Made with a little too much love.
            </p>

            <button
              className="back-button"
              onClick={restart}
            >
              ↻ Start again
            </button>

          </div>
        </section>

      </div>


      {slide > 0 && (
        <button
          className="back-arrow"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ↑
        </button>
      )}


      <div className="progress">

        {Array.from({ length: 7 }, (_, index) => (
          <span
            key={index}
            className={
              slide === index
                ? "progress-dot active"
                : "progress-dot"
            }
            onClick={() => setSlide(index)}
          ></span>
        ))}

      </div>

    </div>
  );
}

export default App;