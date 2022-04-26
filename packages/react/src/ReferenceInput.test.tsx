import { MockClient } from '@medplum/mock';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { MedplumProvider } from './MedplumProvider';
import { ReferenceInput, ReferenceInputProps } from './ReferenceInput';

const medplum = new MockClient();

function setup(args: ReferenceInputProps): void {
  render(
    <MedplumProvider medplum={medplum}>
      <ReferenceInput {...args} />
    </MedplumProvider>
  );
}

describe('ReferenceInput', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(async () => {
    vi.useRealTimers();
  });

  test('Renders empty property', () => {
    setup({
      name: 'foo',
    });
    expect(screen.getByTestId('reference-input-resource-type-input')).toBeInTheDocument();
  });

  test('Renders default value resource type', async () => {
    await act(async () => {
      setup({
        name: 'foo',
        defaultValue: {
          reference: 'Patient/123',
        },
      });
    });
    expect(screen.getByTestId('reference-input-resource-type-input')).toBeInTheDocument();
    expect((screen.getByTestId('reference-input-resource-type-input') as HTMLInputElement).value).toBe('Patient');
  });

  test('Change resource type without target types', async () => {
    setup({
      name: 'foo',
    });

    await act(async () => {
      fireEvent.change(screen.getByTestId('reference-input-resource-type-input'), {
        target: { value: 'Practitioner' },
      });
    });

    expect(screen.getByTestId('reference-input-resource-type-input')).toBeInTheDocument();
  });

  test('Renders property with target types', () => {
    setup({
      name: 'foo',
      targetTypes: ['Patient', 'Practitioner'],
    });
    expect(screen.getByTestId('reference-input-resource-type-select')).toBeInTheDocument();
  });

  test('Change resource type with target types', async () => {
    setup({
      name: 'foo',
      targetTypes: ['Patient', 'Practitioner'],
    });

    await act(async () => {
      fireEvent.change(screen.getByTestId('reference-input-resource-type-select'), {
        target: { value: 'Practitioner' },
      });
    });

    expect(screen.getByTestId('reference-input-resource-type-select')).toBeInTheDocument();
  });

  test('Use autocomplete', async () => {
    setup({
      name: 'foo',
      targetTypes: ['Patient', 'Practitioner'],
    });

    // Select "Patient" resource type
    await act(async () => {
      fireEvent.change(screen.getByTestId('reference-input-resource-type-select'), { target: { value: 'Patient' } });
    });

    const input = screen.getByTestId('input-element') as HTMLInputElement;

    // Enter "Simpson"
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Simpson' } });
    });

    // Wait for the drop down
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });

    await waitFor(() => screen.getByTestId('dropdown'));

    // Press "Enter"
    await act(async () => {
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    });

    expect(screen.getByText('Homer Simpson')).toBeDefined();
  });

  test('Call onChange', async () => {
    const onChange = vi.fn();

    setup({
      name: 'foo',
      targetTypes: ['Patient', 'Practitioner'],
      onChange,
    });

    // Select "Patient" resource type
    await act(async () => {
      fireEvent.change(screen.getByTestId('reference-input-resource-type-select'), { target: { value: 'Patient' } });
    });

    const input = screen.getByTestId('input-element') as HTMLInputElement;

    // Enter "Simpson"
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Simpson' } });
    });

    // Wait for the drop down
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });

    await waitFor(() => screen.getByTestId('dropdown'));

    // Press "Enter"
    await act(async () => {
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    });

    await waitFor(() => screen.getByText('Homer Simpson'));

    expect(screen.getByText('Homer Simpson')).toBeDefined();
    expect(onChange).toHaveBeenCalled();
  });
});
