import React, { useEffect, useState } from 'react';
import { CSVDownload } from 'react-csv';
import FirstNames from './DataGenerator/FirstNames.json';
import LastNames from './DataGenerator/LastNames.json';
import CitiesCountries from './DataGenerator/CitiesCountries.json';
import EmailProviders from './DataGenerator/EmailProviders.json';
import CountryCodes from './DataGenerator/CountryCodes.json';
import type { ChangeEvent } from 'react';
import M from 'materialize-css';

const DataGenerator = () => {
  const [download, setDownload] = useState<JSX.Element | undefined>();

  const options: { [key: string]: any } = {
    sets: 1000,
    gender: true,
    dob: true,
    email: true,
    phone: true,
    city: true,
    country: true,
  };

  useEffect(M.updateTextFields, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    options[e.target.id] =
      e.target.type === 'number' ? e.target.value : e.target.checked;
  }

  function handleDownload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (options.sets > 0) {
      const sets = getSets();
      setDownload(<CSVDownload data={sets} target="_blank" />);
      setTimeout(setDownload, 1000);
      console.log(sets);
    }
  }

  function getSets() {
    const maleNames = 500;

    let sets = [['firstname', 'lastname']];

    if (options.gender) sets[0].push('gender');
    if (options.dob) sets[0].push('dob');
    if (options.email) sets[0].push('email');
    if (options.phone) sets[0].push('phone');
    if (options.city) sets[0].push('city');
    if (options.country) sets[0].push('country');

    for (let i = 0; i < options.sets; i++) {
      const firstId = getRandomInt(FirstNames.length - 1);
      const cityId = getRandomInt(CitiesCountries.length - 1);

      let data = [
        FirstNames[firstId],
        LastNames[getRandomInt(LastNames.length - 1)],
      ];

      if (options.gender) data.push(firstId < maleNames ? 'male' : 'female');
      if (options.dob)
        data.push(
          new Date(
            Date.now() -
              +new Date(Math.random() * 1000 * 60 * 60 * 24 * 360 * 100)
          )
            .toISOString()
            .split('T')[0]
        );
      if (options.email)
        data.push(
          data[0] +
            '.' +
            data[1] +
            '@' +
            EmailProviders[getRandomInt(EmailProviders.length - 1)]
        );
      if (options.phone)
        data.push(
          '+' +
            CountryCodes[getRandomInt(CountryCodes.length - 1)].toString() +
            getRandomInt(999999).toString()
        );
      if (options.city) data.push(CitiesCountries[cityId][0]);
      if (options.country) data.push(CitiesCountries[cityId][1]);

      sets.push(data);
    }
    return sets;
  }

  return (
    <section className="accent-bottom center-content panel">
      <h2>Generate your CSV</h2>
      <form
      onSubmit={handleDownload}
      style={{ marginTop: "2rem" }}>
        <div className="input-field">
          <label htmlFor="sets">Number of Sets</label>
          <input
            id="sets"
            onChange={handleChange}
            type="number"
            defaultValue={options.sets}
            style={{
              maxWidth: '300px'
            }}
          />
        </div>
        <label style={{ display: 'block' }}>
          <input
          id="firstname"disabled
          checked
          type="checkbox" />
          <span>First Name</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
          checked
          disabled
          id="lastname"
          type="checkbox" />
          <span>Last Name</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.gender}
            id="gender"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Gender</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.dob}
            id="dob"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Date of Birth</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.email}
            id="email"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Email Address</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.phone}
            id="phone"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Phone Number</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.city}
            id="city"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Include Cities</span>
        </label>
        <label style={{ display: 'block' }}>
          <input
            defaultChecked={options.country}
            id="country"
            onChange={handleChange}
            type="checkbox"
          />
          <span>Include Country</span>
        </label>
        <div className="input-field">
          <button className="btn waves-effect" id="download">
            Console.Log and Download
          </button>
        </div>
        {download}
      </form>
    </section>
  );
};

export default DataGenerator;

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
