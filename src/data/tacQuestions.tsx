const tacQuestions = [
  {
    question: 'What is TAC?',
    options: [
      'A type of cryptocurrency',
      'A TON-based wallet',
      'A network extension for TON enabling EVM compatibility',
      'A layer for staking Bitcoin'
    ],
    answer: 'C'
  },
  {
    question: 'What is the main benefit TAC provides to users?',
    options: [
      'Higher transaction fees',
      'Ability to access EVM apps directly via TON wallets',
      'TON-exclusive smart contract development',
      'Mining rewards through the Cosmos network'
    ],
    answer: 'B'
  },
  {
    question: 'Which technologies power the TAC EVM Layer?',
    options: [
      'Polkadot and Avalanche',
      'Ethereum Layer 2',
      'CosmosSDK + Ethermint',
      'Binance Smart Chain'
    ],
    answer: 'C'
  },
  {
    question: 'What mechanism secures the TAC EVM Layer?',
    options: [
      'Proof-of-Work',
      'PoS with Ethereum validators',
      'dPoS and Babylon Bitcoin Staking',
      'Random validator rotation'
    ],
    answer: 'C'
  },
  {
    question: 'What role do sequencers play in TAC?',
    options: [
      'They mine blocks',
      'They generate TON wallets',
      'They validate and forward messages between chains',
      'They write smart contracts'
    ],
    answer: 'C'
  },
  {
    question: 'How does TAC ensure cross-chain message security?',
    options: [
      'One-step validator approval',
      'Random number generation',
      'Multiple validation layers with 66% intra-group and cross-group consensus',
      'Simple peer-to-peer routing'
    ],
    answer: 'C'
  },
  {
    question: 'What happens if a transaction fails in the TAC system?',
    options: [
      'It is discarded',
      'The user loses funds',
      'A rollback process returns assets to the sender',
      'The network ignores it'
    ],
    answer: 'C'
  },
  {
    question: 'What is a Proxy App in TAC?',
    options: [
      'A bridge between two EVM chains',
      'A method for users to mint new tokens',
      'A smart contract that handles cross-chain interaction behind the scenes',
      'An on-chain marketplace'
    ],
    answer: 'C'
  },
  {
    question: 'Which language can be used to write proxy contracts on the TAC EVM Layer?',
    options: [
      'Vyper',
      'Python',
      'Solidity',
      'Rust'
    ],
    answer: 'C'
  },
  {
    question: 'What formula is used to calculate Epoch IDs in TAC?',
    options: [
      'BlockHeight / TotalBlocks',
      '(now - protocolDeployDate) / epochDuration',
      'gasLimit * gasPrice',
      'currentTime + averageLatency'
    ],
    answer: 'B'
  },
  {
    question: 'What makes the TAC EVM Layer “EVM-equivalent”?',
    options: [
      'It uses Ethereum nodes',
      'It’s fully compatible with Solidity smart contracts',
      'It runs on TON’s original blockchain',
      'It supports Bitcoin payments'
    ],
    answer: 'B'
  },
  {
    question: 'What is the main purpose of the decentralized sequencer network in TAC?',
    options: [
      'Generate TON tokens',
      'Sign user transactions',
      'Validate and deliver messages securely between chains',
      'Manage wallets'
    ],
    answer: 'C'
  },
  {
    question: 'What happens after message validation is complete in TAC?',
    options: [
      'The system creates a new smart contract',
      'Transaction is executed on the EVM side',
      'A new epoch is created',
      'The message is stored in IPFS'
    ],
    answer: 'B'
  },
  {
    question: 'What does the TON Adapter specifically do in the TAC ecosystem?',
    options: [
      'It bridges Bitcoin and Ethereum',
      'It manages user identity',
      'It routes and secures cross-chain messages and transactions',
      'It runs a TON wallet frontend'
    ],
    answer: 'C'
  },
  {
    question: 'How are malicious sequencers discouraged in TAC?',
    options: [
      'Public blacklisting',
      'Slashable collateral and penalty system',
      'Legal enforcement',
      'Reward-only approach'
    ],
    answer: 'B'
  },
  {
    question: 'What is the purpose of the Merkle tree used by sequencers?',
    options: [
      'Compress data for faster syncing',
      'Encrypt transaction contents',
      'Group transactions for validation',
      'Represent user credentials'
    ],
    answer: 'C'
  },
  {
    question: 'What layer handles the locking of assets when a user interacts with an EVM app through TAC?',
    options: [
      'EVM Layer',
      'TON Adapter',
      'Ethereum Layer 2',
      'Sequencer Cluster'
    ],
    answer: 'B'
  },
  {
    question: 'Which component executes the smart contract logic during a cross-chain interaction?',
    options: [
      'The TON Proxy Contract',
      'The TAC Sequencer',
      'The EVM Proxy Contract',
      'The Adapter Indexer'
    ],
    answer: 'C'
  },
  {
    question: 'How does TAC enhance the TON ecosystem for developers?',
    options: [
      'Reduces gas fees',
      'Allows JavaScript smart contracts',
      'Enables EVM integration and proxy automation',
      'Offers free tokens'
    ],
    answer: 'C'
  },
  {
    question: 'What ensures transactions are processed in a predictable order in TAC?',
    options: [
      'Hash-based sequencing',
      'Timestamps',
      'Epoch-based processing',
      'Block weight metrics'
    ],
    answer: 'C'
  },
  {
    question: 'What are the three main components of TAC?',
    options: [
      'DEX, Bridges, Validators',
      'Sequencer Chain, TON Wallet, Gas Meter',
      'TAC EVM, TON Adapter, Proxy Apps',
      'Cosmos Hub, Ethereum Core, MetaMask'
    ],
    answer: 'C'
  },
  {
    question: 'What is the purpose of Babylon Bitcoin (re)Staking in TAC?',
    options: [
      'To generate block rewards for Ethereum',
      'To delay finality of TAC blocks',
      'To provide economic security against double-signing',
      'To speed up transaction execution'
    ],
    answer: 'C'
  },
  {
    question: 'What is a key security feature of the TAC EVM Layer?',
    options: [
      'Re-org capability',
      'Unlimited block size',
      'Same-block finality via Tendermint-Core',
      'Multi-chain sharding'
    ],
    answer: 'C'
  },
  {
    question: 'What is the role of Proxy Apps in TAC?',
    options: [
      'Manage consensus between nodes',
      'Handle block production',
      'Enable app-level cross-chain interaction via smart contracts',
      'Store EVM chain metadata'
    ],
    answer: 'C'
  },
  {
    question: 'Which of the following is not a task of the TON Adapter?',
    options: [
      'Handle elections and message routing',
      'Execute smart contracts on Bitcoin',
      'Provide data availability and consensus',
      'Lock/unlock assets across chains'
    ],
    answer: 'B'
  },
  {
    question: 'What happens during the “Event Detection” phase in TAC’s transaction lifecycle?',
    options: [
      'Events are stored in Bitcoin blocks',
      'Sequencers generate Merkle proofs',
      'Sequencers detect and store log messages from TON',
      'Contracts are auto-executed on the EVM layer'
    ],
    answer: 'C'
  },
  {
    question: 'How are Merkle trees used in the TAC network?',
    options: [
      'As encryption keys',
      'To verify consensus timestamps',
      'To structure and validate grouped transactions',
      'To build random addresses'
    ],
    answer: 'C'
  },
  {
    question: 'What ensures transaction finalization or rollback in TAC?',
    options: [
      'Use of Merkle hashing',
      'Sequencer penalty logic',
      'State updates and commission distribution logic',
      'PoW checkpointing'
    ],
    answer: 'C'
  },
  {
    question: 'How is group selection for sequencers handled?',
    options: [
      'Random lottery',
      'Delegation from Ethereum validators',
      'DAO voting or multisig processes',
      'First-come, first-served'
    ],
    answer: 'C'
  },
  {
    question: 'What is the block time of the TAC EVM Layer?',
    options: [
      '1 second',
      '2 seconds',
      '3 seconds',
      '10 seconds'
    ],
    answer: 'C'
  },
  {
    question: 'Which Ethereum version is TAC EVM rebased from to include modern opcodes like PUSH0 and EIP-1559?',
    options: [
      'Geth 1.9',
      'Geth 1.10',
      'Besu 1.7',
      'Geth 2.0'
    ],
    answer: 'B'
  },
  {
    question: 'Which consensus engine underpins the TAC EVM Layer?',
    options: [
      'HotStuff',
      'GRANDPA',
      'Tendermint-Core',
      'Snowman++'
    ],
    answer: 'C'
  },
  {
    question: 'What happens if a Babylon validator double-signs a block?',
    options: [
      'It receives more rewards',
      'Its BTC stake is slashed',
      'The block is finalized faster',
      'The system shuts down'
    ],
    answer: 'B'
  },
  {
    question: 'How are sequencer groups formed in TAC?',
    options: [
      'Automatically by validators',
      'Elected via DAO voting or multisig',
      'Random selection',
      'Chosen by smart contracts'
    ],
    answer: 'B'
  },
  {
    question: 'What is the primary role of sequencers in the TAC ecosystem?',
    options: [
      'Mint tokens on Bitcoin',
      'Create NFTs',
      'Monitor events and validate messages across chains',
      'Host web apps'
    ],
    answer: 'C'
  },
  {
    question: 'What minimum agreement is required for a sequencer group to validate a transaction?',
    options: [
      '50%',
      '66%',
      '75%',
      '100%'
    ],
    answer: 'B'
  },
  {
    question: 'What ensures that a group maintains economic security in TAC?',
    options: [
      'Locked liquidity pools',
      'Slashing of collateral',
      'On-chain governance fees',
      'Cross-chain hash locking'
    ],
    answer: 'B'
  },
  {
    question: 'Which of the following does the TON Adapter NOT handle?',
    options: [
      'Transaction execution',
      'EVM block production',
      'Elections',
      'Message routing'
    ],
    answer: 'B'
  },
  {
    question: 'What mechanism is used to create epochs in TAC?',
    options: [
      'A hash of validator keys',
      'A clock-based formula using deploy date and epoch duration',
      'Consensus voting',
      'Random block sampling'
    ],
    answer: 'B'
  },
  {
    question: 'What is a key difference between TAC’s EVM and Ethereum mainnet?',
    options: [
      'TAC supports Solidity, Ethereum mainnet does not',
      'TAC uses Tendermint consensus instead of PoW',
      'TAC requires less gas',
      'TAC is centralized'
    ],
    answer: 'B'
  },
  {
    question: 'Which component coordinates the delivery of messages across the TAC network?',
    options: [
      'The Proxy Contract',
      'The Sequencer Network',
      'The TON Wallet',
      'The Gas Meter'
    ],
    answer: 'B'
  },
  {
    question: 'What ensures state consistency during cross-chain transactions in TAC?',
    options: [
      'Finality and rollback logic integrated with sequencer consensus',
      'Randomized block confirmation',
      'External oracle inputs',
      'Time delays'
    ],
    answer: 'A'
  },
  {
    question: 'What type of applications can be integrated using TAC Proxy Apps?',
    options: [
      'Only native TON contracts',
      'Any EVM-compatible dApp supporting proxy interaction',
      'Only Bitcoin contracts',
      'Non-blockchain web apps'
    ],
    answer: 'B'
  },
  {
    question: 'What is the consequence of a failed transaction on TAC?',
    options: [
      'Funds are lost',
      'Assets are locked indefinitely',
      'Rollback mechanisms restore asset states',
      'Users must manually re-submit'
    ],
    answer: 'C'
  }
];

export default tacQuestions;