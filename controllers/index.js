const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Guest = require('../models/guest');
const Podcast = require('../models/podcast');
const Lead = require('../models/lead')

exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, 'secret')
    const user = await User.findOne({ _id: data._id })
    if (!user) {
      throw new Error()
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401).send('Not authorized')
  }
}

exports.createUser = async (req, res) => {
  try{
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.json({ user, token })
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.loginUser = async (req, res) => {
  try{
    const user = await User.findOne({ email: req.body.email })
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      res.status(400).send('Invalid login credentials')
    } else {
      const token = await user.generateAuthToken()
      res.json({ user, token })
    }
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.updateUser = async (req, res) => {
  try{
    const updates = Object.keys(req.body)
    const user = await User.findOne({ _id: req.params.id })
    updates.forEach(update => user[update] = req.body[update])
    await user.save()
    res.json(user)
  }catch(error){
    res.status(400).json({message: error.message})
  }
  
}

exports.deleteUser = async (req, res) => {
  try{
    await req.user.deleteOne()
    res.json({ message: 'User deleted' })
  }catch(error){
    res.status(400).json({message: error.message})
  }
}


exports.createGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json(guest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listGuests = async (req, res) => {
  try {
    const guests = await Guest.find().populate('podcasts');
    res.json(guests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGuestDetails = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id).populate('podcasts');
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.json(guest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.leadIndex = async (req, res) => {
  try {
    const guests = await Lead.find({})
    res.json(guests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createLead = async (req, res) => {
  try {
    const guest = new Lead(req.body);
    await guest.save();
    res.status(201).json(guest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.showLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
