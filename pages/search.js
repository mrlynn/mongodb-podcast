import { useRouter } from 'next/router';
import React, {setState, useState, useEffect} from 'react';
import ShowList from '../components/ShowList';
import ShowNotes from '../components/ShowNotes';
import Player from '../components/Player';
import Meta from '../components/meta';
import Page from '../components/Page';
import { getShows } from '../lib/getShows'
import {connectToDatabase} from '../lib/mongodb';


export default function Search({shows, showNumber}){
  const router = useRouter()
  const [results, setResults ] = useState();
  const [show, setShow] = useState();
  const [currentShow, setCurrentShow] = useState();
  const [current, setCurrent] = useState();
  const [currentPlaying, setCurrentPlaying] = useState();
  const [isPlaying, setIsPlaying ] = useState();


  useEffect(()=> {
    if(shows){
      setResults(shows);
      setShow(shows[0]);
      setCurrentShow(showNumber);
      setCurrent(showNumber);
    }
  }, [])


  return (
    <Page>
      <div className="wrapper search-wrapper">

        {results && 
        <main className="show-wrap" id="main" tabIndex="-1">
          {current &&
            <Player show={current} onPlayPause={a => setIsPlaying(!a.paused)}/>
          }
          <ShowList
          shows={results}
          currentShow={currentShow}
          currentPlaying={currentPlaying}
          setCurrentPlaying={episode => {
            setCurrentPlaying(episode);
            setCurrent(shows.find(showItem => showItem.displayNumber === episode))
          
          }}
          isPlaying={isPlaying}
          />

          {show &&
            <ShowNotes
              show={show}
            />
          }
        </main>
        }

        {!results &&
          <h1 className="no-results">No Results :(</h1>
        }
      </div>
    </Page>
  );
}


export async function getServerSideProps({params, query}) {
  const {db} = await connectToDatabase();
  const data = await getShows();
  const q = query.q;
  let props = {}

  const results = await db.collection('shows').aggregate([
    {
      $search: {
        "search": {
          "query": q,
          "path":["title", "excerpt"]
        }
      }
    }, 
    {
      $limit: 10
    }
  ]).toArray();

  const intersection = data.filter(o1 => results.some(o2=> o1.title === o2.title))

  if(intersection.length > 0){
    const shows = intersection;
    const showNumber = shows[0].displayNumber;
    props = { shows, showNumber };
  }

  return {
    props
  }
}



/*
export default withRouter(
  class IndexPage extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired,
      shows: PropTypes.array
    };

    constructor(props) {
      super();
      const currentShow = props.showNumber

      this.state = {
        currentShow,
        currentPlaying: currentShow,
        isPlaying: false,
      };
    }

    componentWillReceiveProps(nextProps) {
      const { query } = nextProps.router;

      if(query.q){
        const user = nextProps.user;

        const result = user.callFunction('podcastSearch', [query.q]);

        result.then(data => {

          const shows = this.props.shows;
          const results = data;
          const intersection = shows.filter(o1 => results.some(o2=> o1.title === o2.title))

          this.setState({
            results: intersection
          })
        })
      }
    }

    setCurrentPlaying = currentPlaying => {
      console.log('Setting current playing');
      this.setState({ currentPlaying });
    };

    setIsPlaying = (isPlaying) => {
      this.setState({isPlaying})
    }

    render() {
      const { results, currentShow, currentPlaying, isPlaying } = this.state;
      let { shows } = this.props;

      if (!shows) {
        return <ErrorPage statusCode={404} />
      }

      if(results){
        shows = results;
      }

      const show = shows.find(showItem => showItem.displayNumber === currentShow)
      const current = shows.find(showItem => showItem.displayNumber === currentPlaying)

      return (
        <Page>
          <Meta show={show} />
          <div className="wrapper">
            <main className="show-wrap" id="main" tabIndex="-1">
              <Player show={current} onPlayPause={a => this.setIsPlaying(!a.paused)}/>
              <ShowList
                shows={shows}
                currentShow={currentShow}
                currentPlaying={currentPlaying}
                setCurrentPlaying={this.setCurrentPlaying}
                isPlaying={isPlaying}
              />
              <ShowNotes
                show={show}
                setCurrentPlaying={this.setCurrentPlaying}
              />
            </main>
          </div>
        </Page>
      );
    }
  }
);
*/