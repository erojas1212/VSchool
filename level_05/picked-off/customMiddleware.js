const addCustomProperty = (req, res, next) => {
  req.addCustomProperty = "This is a custom property added by middleware";
  next();
};

module.exports = addCustomProperty; 
