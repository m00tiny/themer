import React, { PureComponent } from 'react';
import CodePreview from './CodePreview';
import TerminalPreview from './TerminalPreview';
import Tabs from './Tabs';

export default class TextPreviews extends PureComponent {

  state = { activePreview: 'code' };
  
  render() {
    return (
      <Tabs>
        { ({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
          <div>
            <div>
              <button
                className={ tabClassName }
                style={ getTabStyle(this.state.activePreview === 'code') }
                onClick={ () => this.setState({ activePreview: 'code' }) }
              >Code</button>
              <button
                className={ tabClassName }
                style={ getTabStyle(this.state.activePreview === 'terminal') }
                onClick={ () => this.setState({ activePreview: 'terminal' }) }
              >Terminal</button>
            </div>
            <div className={ contentClassName } style={ contentStyle }>
              { this.state.activePreview === 'code' ? (
                <CodePreview />
              ) : null }
              { this.state.activePreview === 'terminal' ? (
                <TerminalPreview />
              ) : null }
            </div>
          </div>
        ) }
      </Tabs>
    );
  }
}