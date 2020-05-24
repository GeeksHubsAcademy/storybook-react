import React, { useState } from 'react';
import styled from 'styled-components';

import SearchAndSelect from './SearchAndSelect';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  min-height: 100vh;
`;

const decorator = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Components|Form/searchAndSelect',
  decorators: [decorator],
};
const data = [
  {
    id: 66875,
    name: 'Adaline Hodkiewicz',
    job: 'District Intranet Assistant',
    phone: '296-831-0983',
    address: '60433 Abbott Highway',
  },
  {
    id: 38266,
    name: 'Max Stamm',
    job: 'National Response Developer',
    phone: '079-370-8837',
    address: '0368 Dylan Fort',
  },
  {
    id: 32199,
    name: 'Roel Pollich',
    job: 'Senior Metrics Director',
    phone: '202-465-2239',
    address: '8453 Thiel Turnpike',
  },
  {
    id: 94352,
    name: 'Monserrat Hartmann',
    job: 'Principal Web Executive',
    phone: '335-036-6069',
    address: '455 Donnelly Divide',
  },
  {
    id: 22278,
    name: 'Geovanni Roob',
    job: 'Senior Data Executive',
    phone: '601-642-9615',
    address: '47518 Donald Key',
  },
  {
    id: 63387,
    name: 'Sammy Mohr',
    job: 'District Accountability Manager',
    phone: '816-766-9448',
    address: '95604 Weissnat Wells',
  },
  {
    id: 37772,
    name: 'Cleta Dietrich',
    job: 'Future Integration Orchestrator',
    phone: '506-401-1888',
    address: '1421 Beahan Hills',
  },
  {
    id: 72728,
    name: 'Kayley Willms',
    job: 'International Quality Planner',
    phone: '325-438-5517',
    address: '196 Runte Hills',
  },
  {
    id: 14156,
    name: 'Clovis Becker',
    job: 'District Branding Specialist',
    phone: '871-203-9829',
    address: '3472 Forest Via',
  },
  {
    id: 6797,
    name: 'Bradly Weimann',
    job: 'Dynamic Tactics Agent',
    phone: '232-480-3720',
    address: '0882 Andreanne Gateway',
  },
  {
    id: 75853,
    name: 'Kennith Fahey',
    job: 'Lead Response Engineer',
    phone: '783-864-2103',
    address: '08617 Wiegand Track',
  },
  {
    id: 33975,
    name: 'Marianna Ruecker',
    job: 'National Infrastructure Strategist',
    phone: '302-744-2951',
    address: '9908 Ricky Canyon',
  },
  {
    id: 51089,
    name: 'Lynn Eichmann',
    job: 'Product Paradigm Supervisor',
    phone: '935-001-7122',
    address: '554 Tierra Drives',
  },
  {
    id: 28407,
    name: 'Dovie Crooks',
    job: 'Investor Directives Designer',
    phone: '196-170-4618',
    address: '397 Hoeger Inlet',
  },
  {
    id: 81487,
    name: 'Fletcher Wisozk',
    job: 'Senior Metrics Manager',
    phone: '509-507-7699',
    address: '32830 Jon Squares',
  },
  {
    id: 41428,
    name: 'Lue Ward',
    job: 'Dynamic Configuration Designer',
    phone: '996-085-5670',
    address: '7023 Veum Dale',
  },
  {
    id: 25741,
    name: 'Wilmer Stoltenberg',
    job: 'Global Quality Analyst',
    phone: '035-054-7932',
    address: '21552 Charles Via',
  },
  {
    id: 17528,
    name: 'Braxton MacGyver',
    job: 'Direct Interactions Analyst',
    phone: '213-580-0181',
    address: '50397 Terry Brook',
  },
  {
    id: 33436,
    name: 'Brenda Howell',
    job: 'District Solutions Consultant',
    phone: '482-540-5817',
    address: '560 Parisian Heights',
  },
  {
    id: 46382,
    name: 'Matilde Lakin',
    job: 'Lead Communications Assistant',
    phone: '091-362-3407',
    address: '06088 Hodkiewicz Common',
  },
  {
    id: 75865,
    name: 'Rowena Jacobson',
    job: 'Regional Directives Designer',
    phone: '902-128-6875',
    address: '83390 Wilderman Road',
  },
  {
    id: 69982,
    name: 'Evan Hudson',
    job: 'International Interactions Engineer',
    phone: '210-831-2387',
    address: '52160 Bernhard Glens',
  },
  {
    id: 59807,
    name: 'Gilbert Ullrich',
    job: 'International Group Orchestrator',
    phone: '007-891-6452',
    address: '9168 Ward Villages',
  },
  {
    id: 94507,
    name: 'Lysanne Rowe',
    job: 'Forward Group Facilitator',
    phone: '940-349-8620',
    address: '81972 Gorczany Trafficway',
  },
  {
    id: 51975,
    name: 'Noble Weissnat',
    job: 'Internal Usability Manager',
    phone: '061-415-5031',
    address: '3511 Russel Summit',
  },
  {
    id: 2813,
    name: 'Jazmin Schulist',
    job: 'International Solutions Technician',
    phone: '711-394-9594',
    address: '871 Aurore Fields',
  },
  {
    id: 67729,
    name: 'Martin Herzog',
    job: 'Product Research Engineer',
    phone: '449-530-3442',
    address: '08941 Macey Lodge',
  },
  {
    id: 63023,
    name: 'Clotilde White',
    job: 'Chief Interactions Director',
    phone: '236-341-6695',
    address: '09111 Judd Forks',
  },
  {
    id: 48387,
    name: 'Anika Morar',
    job: 'Future Group Liaison',
    phone: '640-060-7219',
    address: '2558 Kshlerin Port',
  },
  {
    id: 50089,
    name: 'Brenda Walter',
    job: 'Customer Paradigm Technician',
    phone: '906-432-2760',
    address: '0846 Paucek Plaza',
  },
  {
    id: 6046,
    name: 'Furman Bednar',
    job: 'Principal Factors Executive',
    phone: '861-345-9858',
    address: '4196 Stokes Streets',
  },
  {
    id: 66165,
    name: 'Sadye Adams',
    job: 'Principal Mobility Developer',
    phone: '863-294-2722',
    address: '848 Kuhlman Island',
  },
  {
    id: 60378,
    name: 'Kathleen Cormier',
    job: 'International Intranet Liaison',
    phone: '750-105-2110',
    address: '730 Bartell Knolls',
  },
  {
    id: 79350,
    name: 'Nathaniel Green',
    job: 'Human Research Manager',
    phone: '992-793-9814',
    address: '7832 Mina Ridges',
  },
  {
    id: 60455,
    name: 'Verlie Monahan',
    job: 'Central Web Developer',
    phone: '621-163-2821',
    address: '84430 Kulas Plains',
  },
  {
    id: 54987,
    name: 'Clarabelle Dicki',
    job: 'Global Infrastructure Strategist',
    phone: '957-886-4098',
    address: '1811 Bartoletti Land',
  },
  {
    id: 67069,
    name: 'Cameron Ernser',
    job: 'Human Interactions Designer',
    phone: '962-436-9034',
    address: '97934 Emmanuel Shore',
  },
  {
    id: 43353,
    name: 'Marcelo Olson',
    job: 'Dynamic Web Architect',
    phone: '428-412-0386',
    address: '69682 MacGyver Summit',
  },
  {
    id: 82164,
    name: 'Mary Durgan',
    job: 'Dynamic Metrics Facilitator',
    phone: '622-109-5836',
    address: '17140 Carissa Divide',
  },
  {
    id: 38668,
    name: 'Harvey Reinger',
    job: 'Global Response Agent',
    phone: '409-201-6743',
    address: '97438 Stephanie Parkway',
  },
  {
    id: 3961,
    name: 'Ayana Greenholt',
    job: 'Senior Program Specialist',
    phone: '593-916-7633',
    address: '917 Harvey Station',
  },
  {
    id: 65199,
    name: 'Shanny Klein',
    job: 'Product Intranet Associate',
    phone: '603-863-7450',
    address: '71348 Anderson Shores',
  },
  {
    id: 18598,
    name: 'Tristin Robel',
    job: 'Dynamic Group Director',
    phone: '082-018-5261',
    address: '549 Willms Greens',
  },
  {
    id: 95825,
    name: 'Ayden Macejkovic',
    job: 'Internal Functionality Designer',
    phone: '522-207-2278',
    address: '440 Kaylah Vista',
  },
  {
    id: 49331,
    name: 'Larue Gerhold',
    job: 'Customer Mobility Supervisor',
    phone: '497-952-6995',
    address: '893 Maria Glens',
  },
  {
    id: 21042,
    name: 'Rachael Langworth',
    job: 'Investor Accounts Analyst',
    phone: '630-564-3085',
    address: '4029 Rogers Gardens',
  },
  {
    id: 31410,
    name: 'Arlie Schultz',
    job: 'Corporate Identity Director',
    phone: '869-727-2822',
    address: '8103 Juanita Green',
  },
  {
    id: 29939,
    name: 'Eliane Goodwin',
    job: 'Corporate Solutions Supervisor',
    phone: '563-054-3741',
    address: '43514 Rowe Bypass',
  },
  {
    id: 18091,
    name: 'Zoila Conn',
    job: 'Global Response Liaison',
    phone: '088-692-2669',
    address: '005 Patience Extension',
  },
  {
    id: 80191,
    name: 'Dameon McGlynn',
    job: 'Dynamic Response Administrator',
    phone: '485-564-4433',
    address: '35428 Pedro Ridge',
  },
  {
    id: 54640,
    name: 'Madelynn Emard',
    job: 'Central Usability Agent',
    phone: '302-532-9085',
    address: '611 Spinka Summit',
  },
  {
    id: 85571,
    name: 'Julien Vandervort',
    job: 'Central Interactions Engineer',
    phone: '667-826-4315',
    address: '61660 Lurline Islands',
  },
  {
    id: 80587,
    name: 'Elmo Schumm',
    job: 'International Assurance Designer',
    phone: '407-455-9219',
    address: '8068 Marcel Wall',
  },
];

async function searchByName(query = '', page = 1) {
  const itemsPerPage = 10;
  const res = data
    .filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    )
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);
  console.log(query, page, res);

  return res;
}

export const SearchAndSelectPagination = () => {
  const [state, setState] = useState(null);
  return (
    <>
      <SearchAndSelect
        renderOption={(record) => `${record.name} ${record.id}`}
        onSearch={(query, page) => searchByName(query, page)}
        onSelect={setState}
        valueText={state ? state.name : ''}
        placeholder={`Busca`}
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};
