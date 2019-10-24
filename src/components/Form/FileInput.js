// FROM: https://github.com/ngokevin/react-file-reader-input
import * as React from 'react';

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);

    // FileReader compatibility warning.
    const win = typeof window === 'object' ? window : {};
    if (!win.File || !win.FileReader || !win.FileList || !win.Blob) {
      console.warn(
        '[react-file-reader-input] Some file APIs detected as not supported.' +
        ' File reader functionality may not fully work.'
      );
    }
    this.input = React.createRef();
  }

  handleChange = (e) => {
    e.preventDefault();

    const files = Array.prototype.slice.call(e.target.files); // Convert into Array
    const readAs = (this.props.as || 'url').toLowerCase();

    // Build Promise List, each promise resolved by FileReader.onload.
    Promise.all(files.map(file => new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = result => {
        // Resolve both the FileReader result and its original file.
        resolve([result, file]);
      };

      // Read the file with format based on this.props.as.
      switch (readAs) {
        case 'binary': {
          (reader).readAsBinaryString(file);
          break;
        }
        case 'buffer': {
          reader.readAsArrayBuffer(file);
          break;
        }
        case 'text': {
          reader.readAsText(file);
          break;
        }
        case 'url': {
          reader.readAsDataURL(file);
          break;
        }
      }
    })))
    .then(zippedResults => {
      // Run the callback after all files have been read.
      this.props.onChange(e, zippedResults);
    });
  }

  triggerInput = () => {
    this.input.current.click();
  }

  render() {
    const { as, children, style, key,...props } = this.props;


    return (
      <div key={key} className="_react-file-reader-input" onClick={this.triggerInput} style={style}>
        <input
          {...props}
          type="file"
          ref={this.input }
          onChange={this.handleChange}
          hidden
        />
        {children || <button>upload</button>}
      </div>
    );
  }
}