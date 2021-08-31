import { Helmet } from 'react-helmet';


const Metadata = ({ title, content }) => <Helmet>
    <title> {title} </title>
    <meta name="description" ></meta>

</Helmet>

export default Metadata;