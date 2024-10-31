import React from 'react';
import { ChefHat, Clock, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&q=80"
            alt="Kashmiri Kitchen"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Bringing authentic Kashmiri flavors to your table since 1970
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1970, Kashmiri Delights began as a small family
                  kitchen, sharing the authentic flavors of Kashmir with our local
                  community.
                </p>
                <p>
                  Over five decades, we've grown while maintaining our commitment
                  to authentic recipes, premium ingredients, and the warm
                  hospitality that Kashmir is known for.
                </p>
                <p>
                  Today, we're proud to bring these cherished flavors to homes
                  across the city, combining traditional cooking methods with
                  modern convenience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80"
                alt="Kitchen"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80"
                alt="Spices"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Skilled in authentic Kashmiri cuisine',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Hot food delivered to your door',
  },
  {
    icon: Award,
    title: 'Quality Food',
    description: 'Premium ingredients, authentic taste',
  },
  {
    icon: Users,
    title: 'Happy Customers',
    description: '50+ years of satisfied customers',
  },
];

const team = [
  {
    name: 'Chef Rahul Kumar',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80',
    description:
      'With 20 years of experience in Kashmiri cuisine, Chef Rahul leads our kitchen team.',
  },
  {
    name: 'Priya Sharma',
    role: 'Restaurant Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    description:
      'Ensuring smooth operations and exceptional customer service every day.',
  },
  {
    name: 'Ahmed Khan',
    role: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1574966740793-953ad374e8fe?auto=format&fit=crop&q=80',
    description:
      'Specializing in traditional Kashmiri breads and signature dishes.',
  },
];

export default About;