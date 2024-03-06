import React from 'react';
import votingData from '../component/utils/voting.json';

const Voting = () => {
  const mappedVoters = votingData.voting.map(voter => {
    return (
      <div key={voter.voter_id}>
        <p>Voter ID: {voter.voter_id}</p>
        <p>Candidate Name: {voter.candidate.name}</p>
        <img src={voter.candidate.logo} alt="" />
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">List of Voters</h2>
        {mappedVoters}
      </div>
    </div>
  );
};

export default Voting;
