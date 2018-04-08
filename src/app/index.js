import { h, render, Component } from 'preact';

import { Header } from './header/header';
import { MarkdownEditor } from './editor/markdownEditor';
import { MarkdownRenderer } from './editor/markdownRenderer';

import styles from '../styles/app.css';

class App extends Component {
  render() {
      return (
      <div className={ styles['app-content'] }>
        <div className={ styles['header'] }>
          <Header />
        </div>
        <div className={ styles['editor-editor'] }>
            <MarkdownEditor />
        </div>
        <div className={ styles['editor-renderer'] }>
            <MarkdownRenderer />
        </div>
      </div>);
  }
}

render(<App />, document.body);
