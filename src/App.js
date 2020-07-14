import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className={'app-wrapper'}>
     <header className={'header'}>
        <img className={'img-header'} src='https://s3-us-east-2.amazonaws.com/designevo/projects/uid-1823829/b8648a768c536567cbac6208f5aad894/preview.png?t=1594731230140' alt={'Text'}/>
     </header>
        <nav className={'nav'}>
              <div>
                  <a href={'#'}>Profile</a>
             </div>
            <div>
                <a href={'#'}>Message</a>
            </div>
            <div>
                <a href={'#'}>News</a>
            </div>
            <div>
                <a href={'#'}>Music</a>
            </div>
            <div>
                <a href={'#'}>Settings</a>
            </div>
        </nav>
        <div className={'conetent'}>
            Main Content
            <div>
            <img className={'started-main'} src={'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-1823829/1228dae7d26db4f3b61dc212c23f6cce/preview.png?t=1594734704056'} alt={'Text'}/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
            <div>

            </div>
            </div>
    </div>

  );
}

export default App;
