import React from 'react';

import ProgressionFieldset from './ProgressionFieldset';

export default function StrengthworkForm({ config, progressions, handleChange }) {
  const [
    pullup, squat, dip, hinge, row, pushup, antiExtension, antiRotation, extension,
  ] = Object.keys(config);

  return (
    <form data-testid="form-strengthwork">
      <ProgressionFieldset
        legend="알맞은 풀업 난이도를 골라주세요"
        category={pullup}
        selected={config.pullup}
        progression={progressions.pullup}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 스쿼트 난이도를 골라주세요"
        category={squat}
        selected={config.squat}
        progression={progressions.squat}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 딥 난이도를 골라주세요"
        category={dip}
        selected={config.dip}
        progression={progressions.dip}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 힌지 난이도를 골라주세요"
        category={hinge}
        selected={config.hinge}
        progression={progressions.hinge}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 로우 난이도를 골라주세요"
        category={row}
        selected={config.row}
        progression={progressions.row}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 푸쉬업 난이도를 골라주세요"
        category={pushup}
        selected={config.pushup}
        progression={progressions.pushup}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 Anti-Extension 난이도를 골라주세요"
        category={antiExtension}
        selected={config.antiExtension}
        progression={progressions.antiExtension}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 Anti-Rotation 난이도를 골라주세요"
        category={antiRotation}
        selected={config.antiRotation}
        progression={progressions.antiRotation}
        handleChange={handleChange}
      />
      <ProgressionFieldset
        legend="알맞은 Extension 난이도를 골라주세요"
        category={extension}
        selected={config.extension}
        progression={progressions.extension}
        handleChange={handleChange}
      />
    </form>
  );
}
