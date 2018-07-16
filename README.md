# react-chat-awesome

### Fully configurable and customizable chat component for your React applications. 

## Features

- 100% Customizable
- Props for styles customization
- Lightweight (only react and prop-types as deps)
- Message validation included
- Backend agnostic
- In active development

## Comming in new versions:

- emoji picker
- sending files and images

## [Demo] Coming soon...

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [API](#api)

## Installation

The package can be installed via NPM:

```
npm install react-chat-awesome --save
```

Or YARN:

```
yarn add react-chat-awesome --save
```

## Example

``` javascript
import React, { Component } from 'react'
import { ChatAwesome } from 'react-chat-awesome'



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: []
    }

    this.sender = {
      id: 1
    }

    this.receiver = {
      id: 2,
      imageUrl: 'path/to/source'
    }

    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  onSendMessageClick(text) {
    this.setState({ history: [...this.state.history, {
      id: +new Date(),
      text: msg,
      userID: 1
    }]})
  }

  render() {
    return (
      <div>
        <ChatAwesome
          history={ this.state.history }
          sender={ this.sender }
          receiver={ this.receiver }
          onSendMessageClick={ this.onSendMessageClick }
        />
      </div>
    );
  }
}

```
## API

`ChatAwesome` is the only component you need to import.

ChatAwesome props:

|prop | type   | description |
|-----|--------|---------------|
| *sender | object | person who interacts with the UI and types the message.|
| *receiver | object | person who receives the messages and send responses to sender |
| history | message[] | array of messages |


## Interfaces

### Sender
``` javascript
{
  id: number | string, // required
}
```

### Receiver
``` javascript
{
  id: number | string, // required 
  imageUrl: string
}
```
### Message
``` javascript
{
  id: number | string

}
```