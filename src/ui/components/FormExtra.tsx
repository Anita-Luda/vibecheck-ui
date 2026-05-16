import React from 'react';
import { TextInput, Select, TextArea } from './Input';
import { Button } from './Button';
import { Card } from './Card';

export const FormExtra = () => (
    <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <TextInput label="First Name" placeholder="Krzysztof" id="extra-f-name" />
            <TextInput label="Last Name" placeholder="Potato" id="extra-l-name" />
        </div>
        <TextInput label="Email Address" type="email" placeholder="krzysztof@sector7g.gov" id="extra-email" />
        <Select label="Security Clearance" options={['Level 1', 'Level 2', 'Level 42', 'Hive Mind Alpha']} id="extra-sec" />
        <TextArea label="Reason for Manifestation" placeholder="I need to sync my hovercats..." id="extra-reason" />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--item-gap)' }}>
            <Button role="neutral">Reset</Button>
            <Button role="primary">Submit Manifest</Button>
        </div>
    </Card>
);
