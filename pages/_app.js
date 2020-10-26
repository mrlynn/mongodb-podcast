import * as Realm from "realm-web";

const REALM_APP_ID = "mongodb-podcast-ubain";
const app = new Realm.App({ id: REALM_APP_ID });

function MyApp({ Component, pageProps }) {
  if(!app.currentUser){
    app.logIn(Realm.Credentials.anonymous());
  } else {
    pageProps.user = app.currentUser;
  }
  
  return <Component {...pageProps} />
}

export default MyApp