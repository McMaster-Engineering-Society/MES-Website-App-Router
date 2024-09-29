import React from 'react';

const ExecTeamPanel = () => {
  return (
    <table className='border-separate border-spacing-4'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th>Contact for</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>President</td>
          <td>johndoe@mcmaster.ca</td>
          <td>General Inquiries</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>Vice President</td>
          <td>janedoe@mcmaster.ca </td>
          <td>General Inquiries</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExecTeamPanel;
