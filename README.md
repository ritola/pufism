# Pufism

Provisioning utilities for idempotent server management

## Motivation

> A programming language is low level when its programs require attention to the irrelevant
>
> -- Alain Perlis

Trying to find provisioning tool to match above quote

- Ansible has a steep learning curve if there's no module for the tasks
- Ansible has no modules for single files making it low-level tool for large installs
- Puppet has better compositioning, but a little bit restrictive language

## Current status

Studying approaches. Not production ready.

## Running

### Installation

    npm install git@github.com:ritola/pufism.git

### Example file

    const file = require('pufism').file
    file.directory({path: '/tmp/level1/level2', mode: 'a+rx, u+w', owner: 'root', group: 'root'})
