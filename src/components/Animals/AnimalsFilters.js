import { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./AnimalsFilters.scss";

function AnimalsFilters() {
    const history = useHistory();

    const [queries, setQueries] = useState({
        status: '',
        gender: '',
        species: ''
    });

    let filterAnimalsStatus = [
        { title: 'Всички', query: 'status&', name: "statusChecker" },
        { title: 'За осиновяване', query: 'status=needhome&', name: "statusChecker" },
        { title: 'В лечебница', query: 'status=inmedicalcare&', name: "statusChecker" }
    ];
    let filterAnimalsGender = [
        { title: 'Всички', query: 'gender&', name: "genderChecker" },
        { title: 'Мъж', query: 'gender=male&', name: "genderChecker" },
        { title: 'Жена', query: 'gender=female&', name: "genderChecker" }
    ];
    let filterAnimalsSpecies = [
        { title: 'Всички', query: 'species&', name: "speciesChecker" }, ,
        { title: 'Котка', query: 'species=cat&', name: "speciesChecker" },
        { title: 'Куче', query: 'species=dog&', name: "speciesChecker" }
    ];

    useEffect(() => {
        let queriesRequest = queries.status + queries.gender + queries.species;
        queriesRequest = queriesRequest != "" ? "?" + queriesRequest.slice(0, -1) : "";
        let requestUrl = history.location.pathname + queriesRequest;

        history.push(requestUrl);
    }, [queries]);

    const bindCheckBox = (values) => {
        return values.map(v => (
            <Form.Check
                inline
                key={v.query}
                type="radio"
                label={v.title}
                name={v.name}
                defaultChecked={v.title == "Всички"}
                id={v.query}
                onChange={filterAnimals}
            />
        ));
    }

    const filterAnimals = (e) => {
        setQueries(oldQuery => ({
            status: e.currentTarget.id.includes("status") ? e.currentTarget.id : oldQuery.status,
            gender: e.currentTarget.id.includes("gender") ? e.currentTarget.id : oldQuery.gender,
            species: e.currentTarget.id.includes("species") ? e.currentTarget.id : oldQuery.species
        }));
    }

    return (
        <Form className="wrap-radioBtns">
            <Form.Row>
                <Form.Group as={Col}>
                    {bindCheckBox(filterAnimalsStatus)}
                </Form.Group>
                <Form.Group as={Col}>
                    {bindCheckBox(filterAnimalsGender)}
                </Form.Group>
                <Form.Group as={Col}>
                    {bindCheckBox(filterAnimalsSpecies)}
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default AnimalsFilters;