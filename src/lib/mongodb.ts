// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// lib/models/Contact.ts
import mongoose, { Schema, model, models } from 'mongoose';

export interface IContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip?: string;
  userAgent?: string;
  isRead: boolean;
  createdAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  ip: {
    type: String,
    default: null,
  },
  userAgent: {
    type: String,
    default: null,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create indexes for performance
ContactMessageSchema.index({ createdAt: -1 });
ContactMessageSchema.index({ isRead: 1 });
ContactMessageSchema.index({ email: 1 });

export const ContactMessage = models.ContactMessage || model<IContactMessage>('ContactMessage', ContactMessageSchema);

// lib/models/Project.ts
import mongoose, { Schema, model, models } from 'mongoose';

export interface IProject {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  images?: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: Date;
  endDate?: Date;
  challenges?: string[];
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  metrics?: {
    users?: number;
    performance?: string;
    impact?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  longDescription: {
    type: String,
    trim: true,
    maxlength: 2000,
  },
  technologies: [{
    type: String,
    required: true,
  }],
  category: {
    type: String,
    required: true,
    enum: ['web-app', 'mobile-app', 'api', 'library', 'tool', 'other'],
  },
  githubUrl: {
    type: String,
    validate: {
      validator: function(v: string) {
        return !v || /^https:\/\/github\.com\//.test(v);
      },
      message: 'Invalid GitHub URL',
    },
  },
  liveUrl: {
    type: String,
    validate: {
      validator: function(v: string) {
        return !v || /^https?:\/\//.test(v);
      },
      message: 'Invalid URL',
    },
  },
  imageUrl: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  challenges: [{
    type: String,
  }],
  features: [{
    type: String,
  }],
  testimonial: {
    text: String,
    author: String,
    role: String,
  },
  metrics: {
    users: Number,
    performance: String,
    impact: String,
  },
}, {
  timestamps: true,
});

// Create indexes
ProjectSchema.index({ featured: -1, createdAt: -1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ status: 1 });
ProjectSchema.index({ slug: 1 });

export const Project = models.Project || model<IProject>('Project', ProjectSchema);

// lib/models/Skill.ts
import mongoose, { Schema, model, models } from 'mongoose';

export interface ISkill {
  name: string;
  category: string;
  proficiency: number; // 1-100
  yearsOfExperience: number;
  icon?: string;
  color?: string;
  featured: boolean;
  description?: string;
  projects?: string[]; // Array of project IDs that use this skill
  certifications?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'soft-skills'],
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
    min: 0,
  },
  icon: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
    match: [/^#[0-9A-F]{6}$/i, 'Invalid hex color'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
  certifications: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Create indexes
SkillSchema.index({ category: 1, featured: -1 });
SkillSchema.index({ proficiency: -1 });

export const Skill = models.Skill || model<ISkill>('Skill', SkillSchema);

// types/index.ts
export type { IContactMessage, IProject, ISkill };