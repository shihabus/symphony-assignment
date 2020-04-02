const actionsCreator = types =>
  Object.keys(types)
    .map(type => ({
      fn: payload => ({ payload, type: types[type] }),
      type
    }))
    .reduce((acc, item) => ({ ...acc, [item.type]: item.fn }), {});

export default actionsCreator;
