import {Container, Image} from "react-bootstrap";
import desk_top_divider from "./assets/pattern-divider-desktop.svg"
import mobile_divider from "./assets/pattern-divider-mobile.svg";
import iconDice from "./assets/icon-dice.svg";
import Card from 'react-bootstrap/Card';
import useFetchData from "./hook/useFetchData.ts";
import {endpoints} from "./store/endpoints.ts";
import Spinner from "./components/spinner/Spinner.tsx";
import {useEffect, useState} from "react";
import {DataSet, INIT_DATA} from "./types.ts";

const initialState: DataSet = {
    data: INIT_DATA,
    loading: true,

}


function App() {
    const [data, setData] = useState(initialState);
    const {data: fetched, loading} = useFetchData(endpoints["random-advice"]);

    useEffect(() => {
        if (loading) {
            setData((prevState) => ({
                ...prevState,
                loading: true
            }));
        } else if (!loading) {
            setData((prevState) => ({
                ...prevState,
                data: fetched.slip || prevState.data,
                loading: false
            }));
        }
    }, [fetched, loading]);

    return (
        <div className="container_root">
            <Container fluid="xl" className="container">
                <Card className="card">
                    {!data.loading && data?.data ? <Card.Body className="card_body">
                        <Card.Title className="card_title">{`Advice ${data?.data?.id}`}</Card.Title>
                        <Card.Text className="card_text">{`"${data?.data?.advice}"`}</Card.Text>
                        <Image src={desk_top_divider} className="desk_top_divider"/>
                        <Image src={mobile_divider} className="mobile_divider"/>
                    </Card.Body> : <Spinner/>}
                    <div className="icon_container">
                        <div className="icon">
                            <Image src={iconDice}/>
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default App;
