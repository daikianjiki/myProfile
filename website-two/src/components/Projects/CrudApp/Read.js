import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://63745b7648dfab73a4de2e1d.mockapi.io/order/`)
      .then((response) => {
        setAPIData(response.data);
      })
    getData();
  }, [])

  const setData = (data) => {
    let { id, firstName, lastName, email, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Email', email);
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const getData = () => {
    axios.get(`https://63745b7648dfab73a4de2e1d.mockapi.io/order/`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://63745b7648dfab73a4de2e1d.mockapi.io/order/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div className="read-table">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Table.Cell>
                  <Link to='/update'><Button className="ui yellow button" onClick={() => setData(data)}>Update</Button></Link>
                  <Button className="ui red button" onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
