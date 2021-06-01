import { Meta } from '@storybook/react';
import { SearchDefinition } from '@medplum/core';
import React, { useState } from 'react';
import { SearchControl } from '../SearchControl';

export default {
  title: 'Medplum/SearchControl',
  component: SearchControl,
} as Meta;

export const Checkboxes = () => {
  const [search, setSearch] = useState<SearchDefinition>({
    resourceType: 'Patient'
  });

  return (
    <SearchControl
      search={search}
      checkboxesEnabled={true}
      onLoad={e => console.log('onLoad', e)}
      onClick={e => console.log('onClick', e)}
      onChange={e => {
        console.log('onChange', e);
        setSearch(e.definition);
      }}
    />
  );
};

export const NoCheckboxes = () => {
  const [search, setSearch] = useState<SearchDefinition>({
    resourceType: 'Patient'
  });

  return (
    <SearchControl
      search={search}
      onLoad={e => console.log('onLoad', e)}
      onClick={e => console.log('onClick', e)}
      onChange={e => {
        console.log('onChange', e);
        setSearch(e.definition);
      }}
    />
  );
};