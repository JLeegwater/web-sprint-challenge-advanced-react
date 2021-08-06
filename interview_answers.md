# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   a stateful component uses a state object and does when the state changes. A functional component usually takes some information and returns something it has created with that information

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   componenetWillMount is called on the initial render, whereas componentWillUpdate is called when the state is changed.

3. Define stateful logic.
   stateful logic is when our component holds an manages state.

4. What are the three step of creating a successful test? What is done in each phase?
   Arrange, is when we render the component we test
   Act, query the DOM for an element we expect to be on the document
   Assert, we check to see if the element we expect is actually rendered
