// Automatons, or Finite State Machines (FSM), are extremely useful to programmers when it comes to software design. You will be given a simplistic version of an FSM to code for a basic TCP session.

// The outcome of this exercise will be to return the correct state of the TCP FSM based on the array of events given.

// The input array of events will consist of one or more of the following strings:

// APP_PASSIVE_OPEN, APP_ACTIVE_OPEN, APP_SEND, APP_CLOSE, APP_TIMEOUT, RCV_SYN, RCV_ACK, RCV_SYN_ACK, RCV_FIN, RCV_FIN_ACK
// The states are as follows and should be returned in all capital letters as shown:

// CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, CLOSE_WAIT, LAST_ACK, FIN_WAIT_1, FIN_WAIT_2, CLOSING, TIME_WAIT
// The input will be an array of events. Your job is to traverse the FSM as determined by the events, and return the proper state as a string, all caps, as shown above.

// If an event is not applicable to the current state, your code will return "ERROR".

// Action of each event upon each state:
// (the format is INITIAL_STATE: EVENT -> NEW_STATE)

// CLOSED: APP_PASSIVE_OPEN -> LISTEN
// CLOSED: APP_ACTIVE_OPEN  -> SYN_SENT
// LISTEN: RCV_SYN          -> SYN_RCVD
// LISTEN: APP_SEND         -> SYN_SENT
// LISTEN: APP_CLOSE        -> CLOSED
// SYN_RCVD: APP_CLOSE      -> FIN_WAIT_1
// SYN_RCVD: RCV_ACK        -> ESTABLISHED
// SYN_SENT: RCV_SYN        -> SYN_RCVD
// SYN_SENT: RCV_SYN_ACK    -> ESTABLISHED
// SYN_SENT: APP_CLOSE      -> CLOSED
// ESTABLISHED: APP_CLOSE   -> FIN_WAIT_1
// ESTABLISHED: RCV_FIN     -> CLOSE_WAIT
// FIN_WAIT_1: RCV_FIN      -> CLOSING
// FIN_WAIT_1: RCV_FIN_ACK  -> TIME_WAIT
// FIN_WAIT_1: RCV_ACK      -> FIN_WAIT_2
// CLOSING: RCV_ACK         -> TIME_WAIT
// FIN_WAIT_2: RCV_FIN      -> TIME_WAIT
// TIME_WAIT: APP_TIMEOUT   -> CLOSED
// CLOSE_WAIT: APP_CLOSE    -> LAST_ACK
// LAST_ACK: RCV_ACK        -> CLOSED

// Examples
// ["APP_PASSIVE_OPEN", "APP_SEND", "RCV_SYN_ACK"] =>  "ESTABLISHED"

// ["APP_ACTIVE_OPEN"] =>  "SYN_SENT"

// ["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "APP_CLOSE", "RCV_FIN_ACK", "RCV_ACK"] =>  "ERROR"

function traverseTCPStates(eventList) {
    let state = 'CLOSED'; // initial state, always

    // Traversal code goes here
    let tcpStates = {
        'CLOSED': [{ event: 'APP_PASSIVE_OPEN', new_state: 'LISTEN' }, { event: 'APP_ACTIVE_OPEN', new_state: 'SYN_SENT' }],
        'LISTEN': [{ event: 'RCV_SYN', new_state: 'SYN_RCVD' },
            { event: 'APP_SEND', new_state: 'SYN_SENT' },
            { event: 'APP_CLOSE', new_state: 'CLOSED' }
        ],
        'SYN_RCVD': [{ event: 'APP_CLOSE', new_state: 'FIN_WAIT_1' },
            { event: 'RCV_ACK', new_state: 'ESTABLISHED' }
        ],
        'SYN_SENT': [{ event: 'RCV_SYN', new_state: 'SYN_RCVD' },
            { event: 'RCV_SYN_ACK', new_state: 'ESTABLISHED' },
            { event: 'APP_CLOSE', new_state: 'CLOSED' }
        ],
        'ESTABLISHED': [{ event: 'APP_CLOSE', new_state: 'FIN_WAIT_1' }, { event: 'RCV_FIN', new_state: 'CLOSE_WAIT' }],
        'FIN_WAIT_1': [{ event: 'RCV_FIN', new_state: 'CLOSING' },
            { event: 'RCV_FIN_ACK', new_state: 'TIME_WAIT' },
            { event: 'RCV_ACK', new_state: 'FIN_WAIT_2' }
        ],
        'CLOSING': [{ event: 'RCV_ACK', new_state: 'TIME_WAIT' }],
        'FIN_WAIT_2': [{ event: 'RCV_FIN', new_state: 'TIME_WAIT' }],
        'TIME_WAIT': [{ event: 'APP_TIMEOUT', new_state: 'CLOSED' }],
        'CLOSE_WAIT': [{ event: 'APP_CLOSE', new_state: 'LAST_ACK' }],
        'LAST_ACK': [{ event: 'RCV_ACK', new_state: 'CLOSED' }]
    };

    eventList.forEach((event) => {
        if (state !== 'ERROR' && tcpStates[state]) {
            let nextTransition = tcpStates[state].find((transition) => {
                return transition.event === event;
            });

            if (typeof nextTransition !== 'undefined' && nextTransition != null) {
                state = nextTransition.new_state;
            } else {
                state = 'ERROR';
            }
        } else {
            state = 'ERROR';
        }
    });

    return state;
}