import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import errorMessage from '../errorMessage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';
import styled from 'styled-components';

const ButtonViewRandom = styled.button`
    width: 150px;
    background-color: #344175;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    :active {
        outline: none;
        background-color: #5672ba;
    }
    :focus {
        outline: none;
    }
`;


class App extends React.Component {

    state = { show: true };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                show: !state.show
            }
        })
    }

    render() {

        const { show } = this.state;
        const toggleRandom = show ? <RandomChar /> : null;

        if (this.state.error) {
            return <errorMessage/>
        }

        return (
            <>
                <Container>
                    <Header />
                    <ButtonViewRandom 
                    onClick={this.toggleRandomChar}
                    show='true'>
                        {show ? 'Скрыть' : 'Показать'}
                    </ButtonViewRandom>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {/* <RandomChar /> */}
                            {toggleRandom}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;