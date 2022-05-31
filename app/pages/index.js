import Head from 'next/head'
import Link from 'next/link'

import trending from '../lib/trending'

export async function getServerSideProps(context) {
  let cursor = ''
  if (context.query.cursor) {
    cursor = context.query.cursor
  }
  const data = await trending(cursor);
  return {
    props: {data: data}, // will be passed to the page component as props
  }
}

export default function Home({data}) {

  console.dir(data);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Let's check{' '}
          <Link href="/">
            <a>gfycat!</a>
          </Link>
        </h1>

        <p className="description">
          <form action="/search" method="GET">
            <input type="text" name="q" />
            {' '}
            <input type="submit" value="Search" />
          </form>
        </p>

        <h2>Quick Search</h2>

        <p className="quick">
          <Link href='/search?q=Monday'>
            <a>Monday</a>
          </Link>{' '}
          <Link href='/search?q=Tuesday'>
            <a>Tuesday</a>
          </Link>{' '}
          <Link href='/search?q=Wednesday'>
            <a>Wednesday</a>
          </Link>{' '}
          <Link href='/search?q=Thursday'>
            <a>Thursday</a>
          </Link>{' '}
          <Link href='/search?q=Friday'>
            <a>Friday</a>
          </Link>{' '}
          <Link href='/search?q=Saturday'>
            <a>Saturday</a>
          </Link>{' '}
          <Link href='/search?q=Sunday'>
            <a>Sunday</a>
          </Link>
        </p>

        <h2>Trending GIFs</h2>

        <div className="grid">
          {console.log(data['gfycats'])}
          {data['gfycats'].map( row => (
            <a href={"https://gfycat.com/" + row.gfyId} className="card">
            <h3>{row.title}</h3>
            <p>👀{row.views} 💕{row.likes} </p>
            <img src={row.max1mbGif} />
          </a>
          ))}
        </div>

        <p className="description">
          <Link href={'/?cursor=' + data['cursor']}>
          <a>Explore more</a>
          </Link>
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active,
        .quick a:hover {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 30%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card img {
          max-width: 300px;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
