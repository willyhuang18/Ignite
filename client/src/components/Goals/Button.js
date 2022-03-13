
export default function Button(props) {
    let { action, title } = props;
    return <button style={style} onClick={action}>{title}</button>;
  };

  const style = {
    "width": "5px",
    "height": "5px",
    "borderRadius": "50%",
    "background": "orange"

  }