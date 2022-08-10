class User {
  private guestId;
  private searchService: SearchService;
  public searchQuestions(searchString: string): Question[] {
    return [];
  }
  public registerAccount(): void {}
}

class Account {
  private accountId: number;
  private name: string;
  private username: string;
  private password: string;
  private email: string;
  private address: Address;
  private accountStatus: AccountStatus;
  private reputation: number;
}

enum AccountStatus {
  BLOCKED,
  ACTIVE,
  CLOSED,
}

class Address {
  private street: string;
  private city: string;
  private state: string;
  private country: string;
  private pinCode: string;
}

class Member extends User {
  private account: Account;
  private badges: Array<Badge>;
  //operations
  public addQuestion(question: Question): void {}
  public addComment(entity: Entity, comment: Comment): void {}
  public addAnswer(entity: Entity, answer: Answer): void {}
  public vote(entity: Entity, voteType: VoteType): void {}
  public addTag(question: Question, tag: Tag): void {}
  public flag(entity: Entity): void {}
  public getBadges(): Badge[] {
    return [];
  }
}

class Moderator extends Member {
  public closeQuestion(question: Question): boolean {
    return true;
  }
  public restoreQuestion(question: Question): boolean {
    return true;
  }
}

class Admin extends Member {
  public blockMember(): boolean {
    return true;
  }
  public unblockMember(): boolean {
    return true;
  }
}

class Badge {
  private name: string;
  private description: string;
}

enum VoteType {
  UPVOTE,
  DOWNVOTE,
  CLOSE_VOTE,
  DELETE_VOTE,
}

class Entity {
  private entityId: number;
  private creator: Member;
  private createdDate: Date;
  private votes: Map<VoteType, number>;
  private comments: Array<Comment>;

  public addComment(comment: Comment) {}
  public flagEntity(member: Member) {}
  public voteEntity(voteType: VoteType) {}
}

class Comment extends Entity {
  private message: string;
}

class Question extends Entity {
  private title: string;
  private description: string;
  private status: QuestionStatus;
  private tags: Array<Tag>;
  private editHistory: Array<EditHistory>;
  private answers: Array<Answer>;

  public addQuestion(): boolean {
    return true;
  }
  public addTag(tag: Tag): boolean {
    return true;
  }
}

class Answer extends Entity {
  private answer: string;
  private isAccepted: boolean;

  public addAnswer(question: Question): boolean {
    return true;
  }
}

class Tag {
  private name: string;
  private description: string;
}

class EditHistory {
  private editHistoryId: number;
  private creator: Member;
  private creationDate: Date;
  private prevQuestion: Question;
  private updatedQuestion: Question;
}

enum QuestionStatus {
  ACTIVE,
  BOUNTIED,
  CLOSED,
  FLAGGED,
}

class SearchService {
  public searchQuestions(searchTerm: string) {}
}

export {};
