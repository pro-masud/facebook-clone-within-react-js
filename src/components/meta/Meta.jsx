import { Helmet } from "react-helmet";

const Meta = ({title}) => {
  return <Helmet >
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png" />
        </Helmet>
        }

export default Meta;
